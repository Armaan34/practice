import express from "express"
import authMiddleware from "../../middleware/auth/verifytoken.js"
import { taskCreationValidationRules, errorMiddleware } from "../../middleware/validations/index.js"
import taskModel from "../../models/Tasks/index.js"
import config from "config"
import { ObjectId } from "mongoose"
import Agenda from "agenda"
import sendEmail from "../../utils/sendMail.js"

const agenda = new Agenda({ db: { address: config.get("DB_STRING"), collection: "agenda" } })

const startAgenda = async () => {
    await agenda.start();
    console.log("Agenda scheduler started!");
}

startAgenda()


const router = express.Router()


/*
    API : Add Task
    Method : POST
    Desc : Add New Task into DB
    Access Type : Private
*/

router.post("/", authMiddleware, taskCreationValidationRules(), errorMiddleware, async (req, res) => {
    try {
        const payload = req.payload

        let { taskName, deadline } = req.body

        let presentTime = new Date()

        let deadlineUTC = new Date(deadline);

        let reminders = []
        if (presentTime > deadlineUTC) {
            return res.status(400).json({ error: "Deadline is in the past" })
        }

        let difference = deadlineUTC - presentTime;

        let mins = difference / (1000 * 60)

        let days = difference / (1000 * 60 * 60 * 24)
        if (mins < 5 || days > 30) {
            return res.status(400).json
                ({ error: "Invalid date entered, Deadline should be more than 5 mins and less than 30 days" })
        }

        let reminder1 = new Date(+presentTime + (difference / 4))

        let reminder2 = new Date(+presentTime + (difference / 2))

        let reminder3 = new Date(+presentTime + (difference / (4 / 3)))

        reminders.push({ jobTime: reminder1, jobId: "1" }, { jobTime: reminder2, jobId: "2" }, { jobTime: reminder3, jobId: '3' }, { jobTime: deadlineUTC, jobId: "4" })


        let taskData = {
            taskName,
            deadline,
            reminders
        }

        console.log(taskData);

        let tasks = await taskModel.findOne({ user: payload._id }).populate("user", "fname")
        tasks.tasks.push(taskData)

        await tasks.save()

        let fname = tasks.user.fname

        let job = await agenda.schedule(reminder1, "sendReminder", { reminder: true, dateTime: reminder1, index: 1, fname: fname, email: req.payload.email, taskName: taskName })
        console.log(job.attr._id);
        // agenda.schedule(reminder2, "sendReminder", { reminder: true, dateTime: reminder2  , index : 2 , fname : fname , email : req.payload.email , taskName : taskName})
        // agenda.schedule(reminder3, "sendReminder", { reminder: true, dateTime: reminder3 , index : 3 , fname : fname , email : req.payload.email , taskName : taskName})
        // agenda.schedule(deadlineUTC, "sendReminder", { reminder: false, dateTime: deadlineUTC  , index : 4 , fname : fname , email : req.payload.email , taskName : taskName})


        res.status(200).json({ success: 'New Task Created Successfully' })
    } catch (error) {
        // console.error(error);
        res.status(500).json({ error });
    }
})

agenda.define("sendReminder", async (job) => {
    job.attrs.data.reminder ? sendEmail({
        to: job.attrs.data.email,
        subject: "Reminder",
        body: `Hi,${job.attrs.data.fname}\nthis is your number ${job.attrs.data.index} reminder for the task ${job.attrs.data.taskName}`
    }) : sendEmail({
        to: job.attrs.data.email,
        subject: "Deadline over",
        body: `Hi,${job.attrs.data.fname}\nthis is your mail to let you know that your deadline is finished for the task ${job.attrs.data.taskName}`
    })
})

/*
    API : get all Tasks
    Method : GET
    Desc : get all the tasks (from the logged user)
    Access Type : Private
*/


/*
    API : get specific Tasks
    Method : GET
    Desc : get the tasks (from the logged user)
    Access Type : Private
    router.get("/:task_id",....)
*/


/*
    API : delete specific Tasks
    Method : DELETE
    Desc : deleting and cancel the specific task
    Access Type : Private
*/


router.post("/delete/:agendaId", authMiddleware, async (req, res) => {
    try {
        const payload = req.payload

        const { agendaId } = req.params
  
        let agendaList = await agenda.jobs({name : "sendReminder" })
        agendaList.forEach((ele,i)=>{
            let job = ele
            if(agendaId == job.attrs._id){
                job.remove()
            }
        })
        // const removed = await agenda.cancel({_id : agendaId })

        // console.log(removed);


        res.status(200).json({ success: 'Task Cancelled Successfully' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
})



/*
    API : Edit the specific Task
    Method : PUT
    Desc : editing the specific task and reschedule the jobs
    Access Type : Private
    can edit the taskName and the deadline and the completed Status
*/

export default router


import axios from "axios";
console.time("block 3");

const sum = [];

function hitAPI(num1, num2) {
  return axios.get(`https://microfinance.progressi.studio/${num1}/${num2}`);
}

const calls = [];

for (let i = 0, j = 5; i <= 5, j <= 10; i++, j++) {
  calls.push(hitAPI(i, j));
}

async function main() {
  try {
    const responses = await Promise.all(calls);
    responses.forEach((ele) => {
      sum.push(ele.data.success);
    });
    console.log(sum);
    console.timeEnd("block 3");
  } catch (error) {
    console.log(error);
  }
}
main()

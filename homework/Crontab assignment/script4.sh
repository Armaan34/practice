folder_path="/home/armaan99/thscohort/Crontab"

file_count=$(ls "$folder_path" | wc -l)

output_file="/home/armaan99/thscohort/Crontab"

echo "File Count: $file_count"

echo "File Count: $file_count" > "$output_file"

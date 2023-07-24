current_dir=$(pwd)

username=$(whoami)

output_file="/home/armaan99/thscohort/Crontab/output.txt"

echo "Current Directory: $current_dir"
echo "Username: $username"

echo "Current Directory: $current_dir" > "$output_file"
echo "Username: $username" >> "$output_file"

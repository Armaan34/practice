current_time=$(date +%H:%M:%S)
current_date=$(date +%Y-%m-%d)

username=$(whoami)

current_path=$(pwd)

output_dir=$(date +%Y%m%d%H%M%S)
mkdir -p "$output_dir"

output_file="$output_dir/output.txt"

echo "Local Time: $current_time"
echo "Date: $current_date"
echo "Username: $username"
echo "Current Path: $current_path"

echo "Local Time: $current_time" > "$output_file"
echo "Date: $current_date" >> "$output_file"
echo "Username: $username" >> "$output_file"
echo "Current Path: $current_path" >> "$output_file"

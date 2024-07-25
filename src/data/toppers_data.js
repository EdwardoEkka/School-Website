const allToppersData = [
  { picture: "https://randomuser.me/api/portraits/women/50.jpg", name: "Emma Johnson", class: "X", percentage: "95", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/51.jpg", name: "Liam Smith", class: "XII", stream: "SCIENCE", percentage: "94", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/52.jpg", name: "Olivia Davis", class: "X", percentage: "93", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/53.jpg", name: "Noah Brown", class: "XII", stream: "COMMERCE", percentage: "92", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/54.jpg", name: "Sophia Wilson", class: "XII", stream: "SCIENCE", percentage: "91", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/55.jpg", name: "James Miller", class: "XII", stream: "COMMERCE", percentage: "90", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/56.jpg", name: "Ava Taylor", class: "X", percentage: "89", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/57.jpg", name: "William Anderson", class: "XII", stream: "SCIENCE", percentage: "88", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/58.jpg", name: "Mia Jackson", class: "XII", stream: "COMMERCE", percentage: "87", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/59.jpg", name: "Ethan Harris", class: "X", percentage: "86", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/69.jpg", name: "Isabella White", class: "XII", stream: "SCIENCE", percentage: "85", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/71.jpg", name: "Alexander Lee", class: "XII", stream: "COMMERCE", percentage: "84", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/72.jpg", name: "Charlotte Martin", class: "X", percentage: "83", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/73.jpg", name: "Daniel Walker", class: "XII", stream: "SCIENCE", percentage: "82", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/74.jpg", name: "Amelia Hall", class: "X", percentage: "81", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/75.jpg", name: "Logan King", class: "XII", stream: "COMMERCE", percentage: "80", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/76.jpg", name: "Harper Young", class: "X", percentage: "79", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/77.jpg", name: "Jackson Green", class: "XII", stream: "SCIENCE", percentage: "78", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/78.jpg", name: "Ella Wright", class: "X", percentage: "77", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/99.jpg", name: "Lucas Scott", class: "XII", stream: "COMMERCE", percentage: "76", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/men/40.jpg", name: "James Brown", class: "XII", stream: "SCIENCE", percentage: "75", year: "2023" },
  { picture: "https://randomuser.me/api/portraits/women/20.jpg", name: "Emma Johnson", class: "X", percentage: "95", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/21.jpg", name: "Liam Smith", class: "XII", stream: "SCIENCE", percentage: "94", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/22.jpg", name: "Olivia Davis", class: "X", percentage: "93", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/23.jpg", name: "Noah Brown", class: "XII", stream: "COMMERCE", percentage: "92", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/24.jpg", name: "Sophia Wilson", class: "XII", stream: "SCIENCE", percentage: "91", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/25.jpg", name: "James Miller", class: "XII", stream: "COMMERCE", percentage: "90", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/26.jpg", name: "Ava Taylor", class: "X", percentage: "89", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/27.jpg", name: "William Anderson", class: "XII", stream: "SCIENCE", percentage: "88", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/28.jpg", name: "Mia Jackson", class: "XII", stream: "COMMERCE", percentage: "87", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/29.jpg", name: "Ethan Harris", class: "X", percentage: "86", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/30.jpg", name: "Isabella White", class: "XII", stream: "SCIENCE", percentage: "85", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/31.jpg", name: "Alexander Lee", class: "XII", stream: "COMMERCE", percentage: "84", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/32.jpg", name: "Charlotte Martin", class: "X", percentage: "83", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/33.jpg", name: "Daniel Walker", class: "XII", stream: "SCIENCE", percentage: "82", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/34.jpg", name: "Amelia Hall", class: "X", percentage: "81", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/35.jpg", name: "Logan King", class: "XII", stream: "COMMERCE", percentage: "80", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/36.jpg", name: "Harper Young", class: "X", percentage: "79", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/37.jpg", name: "Jackson Green", class: "XII", stream: "SCIENCE", percentage: "78", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/women/38.jpg", name: "Ella Wright", class: "X", percentage: "77", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/39.jpg", name: "Lucas Scott", class: "XII", stream: "COMMERCE", percentage: "76", year: "2024" },
  { picture: "https://randomuser.me/api/portraits/men/40.jpg", name: "James Brown", class: "XII", stream: "SCIENCE", percentage: "75", year: "2024" },
];

export default allToppersData;

export const specialties = [
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Neurology",
  "Psychiatry",
  "Gynecology",
  "Oncology",
  "Gastroenterology",
  "Endocrinology",
  "Pulmonology",
  "Urology",
  "Rheumatology",
  "Ophthalmology",
  "Anesthesiology"
];

export const doctors = [
  { id: 1, name: "Dr. Smith", specialty: "Cardiology", fees: "$150", hospital: "City Hospital", timing: "6:00 AM - 8:00 AM", gender: "Male" },
  { id: 2, name: "Dr. Johnson", specialty: "Dermatology", fees: "$120", hospital: "Greenwood Clinic", timing: "7:00 AM - 9:00 AM", gender: "Male" },
  { id: 3, name: "Dr. Williams", specialty: "Pediatrics", fees: "$100", hospital: "Children's Hospital", timing: "6:30 AM - 8:30 AM", gender: "Male" },
  { id: 4, name: "Dr. Brown", specialty: "Orthopedics", fees: "$180", hospital: "OrthoCare Center", timing: "8:00 AM - 10:00 AM", gender: "Male" },
  { id: 5, name: "Dr. Garcia", specialty: "Neurology", fees: "$200", hospital: "NeuroHealth Institute", timing: "8:30 AM - 10:30 AM", gender: "Female" },
  { id: 6, name: "Dr. Lee", specialty: "Psychiatry", fees: "$170", hospital: "Mental Wellness Center", timing: "8:00 AM - 10:00 AM", gender: "Female" },
  { id: 7, name: "Dr. Jones", specialty: "Gynecology", fees: "$160", hospital: "Women's Health Center", timing: "7:15 AM - 9:15 AM", gender: "Female" },
  { id: 8, name: "Dr. Thomas", specialty: "Oncology", fees: "$220", hospital: "Cancer Care Center", timing: "9:00 AM - 11:00 AM", gender: "Female" },
  { id: 9, name: "Dr. Wilson", specialty: "Gastroenterology", fees: "$160", hospital: "Gastro Center", timing: "8:10 AM - 10:10 AM", gender: "Male" },
  { id: 10, name: "Dr. Anderson", specialty: "Endocrinology", fees: "$180", hospital: "Endocrine Clinic", timing: "8:20 AM - 10:20 AM", gender: "Male" },
  { id: 11, name: "Dr. Martin", specialty: "Pulmonology", fees: "$175", hospital: "Pulmonary Clinic", timing: "8:40 AM - 10:40 AM", gender: "Female" },
  { id: 12, name: "Dr. Taylor", specialty: "Anesthesiology", fees: "$190", hospital: "Surgery Center", timing: "7:30 AM - 9:30 AM", gender: "Male" },
  { id: 13, name: "Dr. Jackson", specialty: "Rheumatology", fees: "$150", hospital: "Rheumatology Institute", timing: "7:10 AM - 9:10 AM", gender: "Female" },
  { id: 14, name: "Dr. Martinez", specialty: "Ophthalmology", fees: "$130", hospital: "EyeCare Clinic", timing: "6:45 AM - 8:45 AM", gender: "Male" },
  { id: 15, name: "Dr. Robinson", specialty: "Urology", fees: "$110", hospital: "Urology Clinic", timing: "8:35 AM - 10:35 AM", gender: "Male" },
  { id: 16, name: "Dr. White", specialty: "Anesthesiology", fees: "$95", hospital: "Family Health Center", timing: "6:55 AM - 8:55 AM", gender: "Female" },
  { id: 17, name: "Dr. Thompson", specialty: "Dermatology", fees: "$250", hospital: "Aesthetic Clinic", timing: "7:50 AM - 9:50 AM", gender: "Male" },
  { id: 18, name: "Dr. Foster", specialty: "Cardiology", fees: "$300", hospital: "Heart Center", timing: "9:00 AM - 11:00 AM", gender: "Female" },
  { id: 19, name: "Dr. Kim", specialty: "Rheumatology", fees: "$210", hospital: "Rheumatology Clinic", timing: "7:30 AM - 9:30 AM", gender: "Female" },
  { id: 20, name: "Dr. Patel", specialty: "Orthopedics", fees: "$125", hospital: "Health & Wellness Center", timing: "6:15 AM - 8:15 AM", gender: "Male" },
  { id: 21, name: "Dr. Lee", specialty: "Psychiatry", fees: "$170", hospital: "Mental Wellness Center", timing: "8:00 AM - 10:00 AM", gender: "Female" },
  { id: 22, name: "Dr. Smith", specialty: "Pediatrics", fees: "$150", hospital: "City Hospital", timing: "6:00 AM - 8:00 AM", gender: "Male" },
  { id: 23, name: "Dr. Garcia", specialty: "Gynecology", fees: "$200", hospital: "NeuroHealth Institute", timing: "8:30 AM - 10:30 AM", gender: "Female" },
  { id: 24, name: "Dr. Jackson", specialty: "Gastroenterology", fees: "$190", hospital: "Gastro Center", timing: "7:10 AM - 9:10 AM", gender: "Male" }
];

export const  appointments = [
  {
    user: {
      name: "John Doe",
      email: "johndoe@example.com"
    },
    appointmentDate: "2024-11-12",
    appointmentTime: "6:30 AM",
    doctor: {
      name: "Dr. Smith",
      hospital: "City Hospital"
    },
    status: "Confirmed"
  },
  {
    user: {
      name: "Jane Smith",
      email: "janesmith@example.com"
    },
    appointmentDate: "2024-11-13",
    appointmentTime: "8:00 AM",
    doctor: {
      name: "Dr. Johnson",
      hospital: "Greenwood Clinic"
    },
    status: "Pending"
  },
  {
    user: {
      name: "Emily Davis",
      email: "emilydavis@example.com"
    },
    appointmentDate: "2024-11-14",
    appointmentTime: "7:30 AM",
    doctor: {
      name: "Dr. Williams",
      hospital: "Children's Hospital"
    },
    status: "Cancelled"
  },
  {
    user: {
      name: "Michael Brown",
      email: "michaelbrown@example.com"
    },
    appointmentDate: "2024-11-15",
    appointmentTime: "9:00 AM",
    doctor: {
      name: "Dr. Brown",
      hospital: "OrthoCare Center"
    },
    status: "Confirmed"
  },
  {
    user: {
      name: "Sarah Green",
      email: "sarahgreen@example.com"
    },
    appointmentDate: "2024-11-16",
    appointmentTime: "8:30 AM",
    doctor: {
      name: "Dr. Garcia",
      hospital: "NeuroHealth Institute"
    },
    status: "Pending"
  },
  {
    user: {
      name: "David Lee",
      email: "davidlee@example.com"
    },
    appointmentDate: "2024-11-17",
    appointmentTime: "8:15 AM",
    doctor: {
      name: "Dr. Lee",
      hospital: "Mental Wellness Center"
    },
    status: "Confirmed"
  },
  {
    user: {
      name: "Sophia Miller",
      email: "sophiamiller@example.com"
    },
    appointmentDate: "2024-11-18",
    appointmentTime: "7:45 AM",
    doctor: {
      name: "Dr. Jones",
      hospital: "Women's Health Center"
    },
    status: "Cancelled"
  },
  {
    user: {
      name: "William Taylor",
      email: "williamtaylor@example.com"
    },
    appointmentDate: "2024-11-19",
    appointmentTime: "9:30 AM",
    doctor: {
      name: "Dr. Thomas",
      hospital: "Cancer Care Center"
    },
    status: "Confirmed"
  },
  {
    user: {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com"
    },
    appointmentDate: "2024-11-20",
    appointmentTime: "8:00 AM",
    doctor: {
      name: "Dr. Wilson",
      hospital: "Gastro Center"
    },
    status: "Pending"
  },
  {
    user: {
      name: "James Clark",
      email: "jamesclark@example.com"
    },
    appointmentDate: "2024-11-21",
    appointmentTime: "8:45 AM",
    doctor: {
      name: "Dr. Anderson",
      hospital: "Endocrine Clinic"
    },
    status: "Confirmed"
  },
  {
    user: {
      name: "Lily Evans",
      email: "lilyevans@example.com"
    },
    appointmentDate: "2024-11-22",
    appointmentTime: "7:30 AM",
    doctor: {
      name: "Dr. Martin",
      hospital: "Pulmonary Clinic"
    },
    status: "Pending"
  },
  {
    user: {
      name: "Henry Scott",
      email: "henryscott@example.com"
    },
    appointmentDate: "2024-11-23",
    appointmentTime: "9:00 AM",
    doctor: {
      name: "Dr. Taylor",
      hospital: "Surgery Center"
    },
    status: "Cancelled"
  },
  {
    user: {
      name: "Isabella Harris",
      email: "isabellaharris@example.com"
    },
    appointmentDate: "2024-11-24",
    appointmentTime: "8:00 AM",
    doctor: {
      name: "Dr. Jackson",
      hospital: "Rheumatology Institute"
    },
    status: "Confirmed"
  }
];



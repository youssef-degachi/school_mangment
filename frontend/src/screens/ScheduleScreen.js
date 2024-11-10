'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

// Organize schedule by days
const scheduleByDay = {
  'Lundi': [
    { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
    { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" }
  ],
  'Mardi': [
    { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
    { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
  ],
  'Mercredi': [
    { time: '8h30 à 10h00', subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
    { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LI 06" },
    { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Atelier Base de Données Avancée", teacher: "Mohamed TOUMI", salle: "LI 06" }
  ],
  'Jeudi': [
    { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
    { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Haithem HAFSI", salle: "LI 06" },
    { time: '11h50 à 13h20', subject: "Technique de recherche d'emploi et marketing de soi", teacher: "Rayen BEN SALAH", salle: "LI 06" },
    { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
  ],
  'Vendredi': [
    { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
    { time: '10h10 à 11h40', subject: "Atelier SOA", teacher: "Rayen BEN SALAH", salle: "LG 04" },
    { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" }
  ]
};

const timeSlots = [
  '8h30 à 10h00',
  '10h10 à 11h40',
  '11h50 à 13h20',
  '14h30 à 16h00',
  '16h10 à 17h40',
];

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

// List of teachers and salles
const teachers = [
  "Mariem JERIDI", "Wahid HAMDI", "Ahmed NEFZAOUI", "Mohamed TOUMI", "Hamed BENNEJI", "Rayen BEN SALAH", "Maher RHOUMA", "Dziriya ARFAOUI", "Haithem HAFSI", "Soufiene BEN MAHMOUD"
];

const salles = [
  "SI 01", "SI 02", "SI 03", "LG 04", "LI 06"
];

export default function ScheduleScreen() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState('');
  const [newTeacher, setNewTeacher] = useState('');
  const [newSalle, setNewSalle] = useState('');

  // Function to get the course scheduled for a given day and time slot
  const getScheduledCourse = (day, timeSlot) => {
    if (!scheduleByDay[day]) return null;
    return scheduleByDay[day].find(course => course.time === timeSlot);
  };

  // Handle when a course cell is clicked
  const handleCellClick = (course) => {
    setSelectedCourse(course);
    setModalOpen(true); // Open modal on course selection
    setNewSubject(course.subject); // Set subject in modal
    setNewTeacher(course.teacher); // Set teacher in modal
    setNewSalle(course.salle); // Set salle in modal
  };

  // Handle changes in the subject input field
  const handleSubjectChange = (e) => {
    setNewSubject(e.target.value);
  };

  // Handle changes in the teacher dropdown
  const handleTeacherChange = (value) => {
    setNewTeacher(value);
  };

  // Handle changes in the salle dropdown
  const handleSalleChange = (value) => {
    setNewSalle(value);
  };

  // Close the modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Handle form submission (updating course details)
  const handleSubmit = () => {
    if (selectedCourse && newSubject && newTeacher && newSalle) {
      // Update the course details
      selectedCourse.subject = newSubject;
      selectedCourse.teacher = newTeacher;
      selectedCourse.salle = newSalle;
      setModalOpen(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Institut Supérieur des Études Technologiques de Tozeur
        </CardTitle>
        <p className="text-center">Département Technologies de l'Informatique</p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          {/* Grid for Schedule */}
          <div className="grid grid-cols-7 gap-2 mt-6">
            {/* Header row */}
            <div className="font-bold">Time</div>
            {days.map(day => (
              <div key={day} className="font-bold">{day}</div>
            ))}

            {/* Schedule rows */}
            {timeSlots.map((timeSlot) => (
              <>
                <div key={`time-${timeSlot}`} className="font-semibold">
                  {timeSlot}
                </div>
                {days.map((day) => {
                  const course = getScheduledCourse(day, timeSlot);
                  return (
                    <div
                      key={`${day}-${timeSlot}`}
                      onClick={() => course && handleCellClick(course)}
                      className={`p-2 border rounded ${
                        course 
                          ? 'bg-blue-50 hover:bg-blue-100 cursor-pointer' 
                          : 'bg-gray-50'
                      }`}
                    >
                      {course ? (
                        <div className="text-sm">
                          <div className="font-medium truncate">{course.subject}</div>
                          <div className="text-xs text-gray-500 truncate">{course.teacher}</div>
                          <div className="text-xs text-gray-500">{course.salle}</div>
                        </div>
                      ) : (
                        <div className="text-sm text-gray-400">Libre</div>
                      )}
                    </div>
                  );
                })}
              </>
            ))}
          </div>

          {/* Modal for editing subject, teacher, and salle */}
          {modalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h3 className="font-bold text-lg mb-4">Modifier le cours</h3>

                {/* Subject Input */}
                <div className="mb-4">
                  <p className="font-semibold">Matière</p>
                  <input
                    type="text"
                    value={newSubject}
                    onChange={handleSubjectChange}
                    className="w-full p-2 border rounded-lg"
                    placeholder="Entrez le nouveau nom de la matière"
                  />
                </div>

                {/* Teacher Dropdown */}
                <div className="mb-4">
                  <p className="font-semibold">Modifier Enseignant</p>
                  <Select value={newTeacher} onValueChange={handleTeacherChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choisir l'enseignant" />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher} value={teacher}>{teacher}</SelectItem> 
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Salle Dropdown */}
                <div className="mb-4">
                  <p className="font-semibold">Modifier Salle</p>
                  <Select value={newSalle} onValueChange={handleSalleChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choisir la salle" />
                    </SelectTrigger>
                    <SelectContent>
                      {salles.map((salle) => (
                        <SelectItem key={salle} value={salle}>{salle}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                  <Button onClick={handleModalClose}>Fermer</Button>
                  <Button onClick={handleSubmit}>Enregistrer</Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}




//!



// 'use client'

// import { useState } from 'react'
// import { Button } from "../components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

// // All available subjects with their default teachers and rooms
// const availableSubjects = [
//   { subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
//   { subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
//   { subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
//   { subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" },
//   { subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
//   { subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
//   { subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
//   { subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" },
//   { subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
//   { subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
//   { subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
//   { subject: "Technique de recherche d'emploi", teacher: "Rayen BEN SALAH", salle: "LI 06" }
// ];

// // Initial schedule data
// const initialSchedule = {
//   'Lundi': [
//     { time: '8h30 à 10h00', subject: "Web 3.0", teacher: "Mariem JERIDI", salle: "SI 03" },
//     { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier SOA", teacher: "Ahmed NEFZAOUI", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Atelier Framework cross-platform", teacher: "Mohamed TOUMI", salle: "SI 02" }
//   ],
//   'Mardi': [
//     { time: '8h30 à 10h00', subject: "Méthodologie de Conception Objet", teacher: "Mariem JERIDI", salle: "SI 03" },
//     { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Hamed BENNEJI", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier Base de Données Avancée", teacher: "Rayen BEN SALAH", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ],
//   'Mercredi': [
//     { time: '8h30 à 10h00', subject: "Gestion des données Massives", teacher: "Rayen BEN SALAH", salle: "LG 04" },
//     { time: '10h10 à 11h40', subject: "SOA", teacher: "Wahid HAMDI", salle: "LI 06" },
//     { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Atelier Base de Données Avancée", teacher: "Mohamed TOUMI", salle: "LI 06" }
//   ],
//   'Jeudi': [
//     { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
//     { time: '10h10 à 11h40', subject: "Projet d'Intégration", teacher: "Haithem HAFSI", salle: "LI 06" },
//     { time: '11h50 à 13h20', subject: "Technique de recherche d'emploi", teacher: "Rayen BEN SALAH", salle: "LI 06" },
//     { time: '14h30 à 16h00', subject: "Environnement de développement", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ],
//   'Vendredi': [
//     { time: '8h30 à 10h00', subject: "Preparing TOEIC", teacher: "Dziriya ARFAOUI", salle: "SI 01" },
//     { time: '10h10 à 11h40', subject: "Atelier SOA", teacher: "Rayen BEN SALAH", salle: "LG 04" },
//     { time: '11h50 à 13h20', subject: "Atelier développement Mobile natif", teacher: "Maher RHOUMA", salle: "LI 06" }
//   ]
// };

// const timeSlots = [
//   '8h30 à 10h00',
//   '10h10 à 11h40',
//   '11h50 à 13h20',
//   '14h30 à 16h00',
//   '16h10 à 17h40',
// ];

// const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

// export default function ScheduleScreen() {
//   const [schedule, setSchedule] = useState(initialSchedule);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   const handleSubjectSelect = (day, timeSlot, selectedSubjectName) => {
//     const selectedSubjectData = availableSubjects.find(s => s.subject === selectedSubjectName);
    
//     setSchedule(prev => {
//       const newSchedule = { ...prev };
//       if (!newSchedule[day]) {
//         newSchedule[day] = [];
//       }
      
//       // Find if there's already a course at this time slot
//       const timeSlotIndex = newSchedule[day].findIndex(course => course.time === timeSlot);
      
//       const newCourse = {
//         time: timeSlot,
//         ...selectedSubjectData
//       };

//       if (timeSlotIndex >= 0) {
//         newSchedule[day][timeSlotIndex] = newCourse;
//       } else {
//         newSchedule[day].push(newCourse);
//       }
      
//       return newSchedule;
//     });

//     setSelectedCourse(selectedSubjectData);
//   };

//   const getScheduledCourse = (day, timeSlot) => {
//     if (!schedule[day]) return null;
//     return schedule[day].find(course => course.time === timeSlot);
//   };

//   return (
//     <Card className="w-full max-w-3xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">
//           Institut Supérieur des Études Technologiques de Tozeur
//         </CardTitle>
//         <p className="text-center">Département Technologies de l'Informatique</p>
//       </CardHeader>
//       <CardContent>
//         <form className="space-y-4">
//           {/* Grid for Schedule */}
//           <div className="grid grid-cols-7 gap-2 mt-6">
//             {/* Header row */}
//             <div className="font-bold">Time</div>
//             {days.map(day => (
//               <div key={day} className="font-bold">{day}</div>
//             ))}

//             {/* Schedule rows */}
//             {timeSlots.map((timeSlot) => (
//               <>
//                 <div key={`time-${timeSlot}`} className="font-semibold">
//                   {timeSlot}
//                 </div>
//                 {days.map((day) => {
//                   const course = getScheduledCourse(day, timeSlot);
//                   return (
//                     <Select
//                       key={`${day}-${timeSlot}`}
//                       onValueChange={(subject) => handleSubjectSelect(day, timeSlot, subject)}
//                       value={course?.subject || ""}
//                     >
//                       <SelectTrigger className="w-full h-24 whitespace-normal">
//                         <SelectValue>
//                           {course ? (
//                             <div className="text-sm">
//                               <div className="font-medium">{course.subject}</div>
//                               <div className="text-xs text-gray-500">{course.teacher}</div>
//                               <div className="text-xs text-gray-500">{course.salle}</div>
//                             </div>
//                           ) : (
//                             "Sélectionner un cours"
//                           )}
//                         </SelectValue>
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="">Aucun cours</SelectItem>
//                         {availableSubjects.map((subject) => (
//                           <SelectItem key={subject.subject} value={subject.subject}>
//                             {subject.subject}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   );
//                 })}
//               </>
//             ))}
//           </div>

//           {/* Display selected course details */}
//           {selectedCourse && (
//             <div className="mt-4 p-4 border rounded-lg bg-slate-50">
//               <h3 className="font-bold mb-2">Détails du cours sélectionné :</h3>
//               <p><strong>Matière :</strong> {selectedCourse.subject}</p>
//               <p><strong>Enseignant :</strong> {selectedCourse.teacher}</p>
//               <p><strong>Salle :</strong> {selectedCourse.salle}</p>
//             </div>
//           )}

//           {/* Submit and Footer Information */}
//           <div className="grid grid-cols-3 gap-4 mt-6">
//             <div>
//               <p><strong>C :</strong> 07 h</p>
//               <p><strong>TD :</strong> 03.5 h</p>
//             </div>
//             <div>
//               <p><strong>TP :</strong> 00 h</p>
//               <p><strong>Total :</strong> 10.5 h</p>
//             </div>
//             <div>
//               <p><strong>SALLE :</strong> SI 01</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mt-6 text-center">
//             <div>
//               <p className="font-bold">Le Directeur</p>
//               <p>Anouar ALOUI</p>
//             </div>
//             <div>
//               <p className="font-bold">Le Directeur du Département</p>
//               <p>Haithem Hafsi</p>
//             </div>
//             <div>
//               <p className="font-bold">Le Directeur des Etudes et des Stages</p>
//               <p>Soufiene BEN MAHMOUD</p>
//             </div>
//           </div>
//           <Button type="submit" className="w-full">Soumettre</Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
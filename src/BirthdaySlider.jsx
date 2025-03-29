import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const slides = [
  { id: "1", text: "Haloo kaylaa", options: ["Haloo dika", "iy"] },
  { id: "2", text: "Aku punya pantun nih kayy", options: ["gimana tuh?"] },
  { id: "2-1", text: "Lagi badmood ya? Coba senyum dulu biar happy!", options: ["oke"] },
  { id: "3", text: "Beli nanas sama si Udin", options: ["cakep"] },
  { id: "3-1", text: "Nanasnya langsung dimakan si Udin", options: ["wkwkwk cakep"] },
  { id: "4", text: "Minal aidin wal faizin, mohon maaf lahir & batin", options: ["next"] },
  { id: "5", text: "Kalau ada salah maafin", options: ["iya siap"] },
  { id: "5-1", text: "Kalau ada duit kasihin", options: ["CEILAHHH"] },
  { id: "6", text: "Hahahaha, bercanda. Kalo kamu belum tau, hari ini ulang tahun aku yang ke 15🥳", options: ["owhhh", "Hahaha halo dekk!!"] },
  { id: "7", text: "Kan hari ini aku ulang tahun, sebagai orang yang sangat baik, boleh wujudin ini ga?", options: ["apa tuh?", "gamau"] },
  { id: "7-1", text: "Hahaha, iya masih bocil nih aku", options: ["haha iya"] },
  { id: "8", text: "Kamu ga pengen gitu nyobain cinta aku selama 7 hari?", options: ["tiba tiba banget"] },
  { id: "9", text: "Kalo ga cocok bisa di refund🙏🏻", options: ["hmm cobain ga ya"] },
  { id: "10", text: "Kalo gamau gapapa", options: ["mau deh", "kyknya engga dulu dik"] },
  { id: "11", text: "SERIUSANN?!!", options: ["iyaa"] },
  { id: "11-1", text: "Owhh iya gapapa kok kayy, di ucapin aja aku udah seneng", options: ["iyaa"] },
  { id: "12", text: "7 HARI??", options: ["iyaa 7 hari", "selamanya aja yuk"] },
  { id: "13", text: "TERIMA KASIH KAYLAAA", options: ["iyaa sama sama"] },
  { id: "14", text: "Kasih tau jawaban kamu ke wa aku yaa", options: [] }
];

const transitions = {
  "1-Haloo dika": "2",
  "1-iy": "2-1",
  "2-gimana tuh?": "3",
  "2-1-oke": "2",
  "3-cakep": "3-1",
  "3-1-wkwkwk cakep": "4",
  "4-next": "5",
  "5-iya siap": "5-1",
  "5-1-CEILAHHH": "6",
  "6-owhhh": "7",
  "6-Hahaha halo dekk!!": "7-1",
  "7-apa tuh?": "8",
  "7-gamau": "7",
  "7-1-haha iya": "7",
  "8-tiba tiba banget": "9",
  "9-hmm cobain ga ya": "10",
  "10-mau deh": "11",
  "10-kyknya engga dulu dik": "11-1",
  "11-iyaa": "12",
  "11-1-iyaa": "14",
  "12-iyaa 7 hari": "13",
  "12-selamanya aja yuk": "13",
  "13-iyaa sama sama": "14"
};

export default function BirthdaySlider() {
  const [currentSlide, setCurrentSlide] = useState("1");
  const [apaTuhSize, setApaTuhSize] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [randomPosition, setRandomPosition] = useState({ top: 0, left: 0 });

  const handleOptionClick = (option) => {
    if (currentSlide === "7" && option === "gamau") {
      setApaTuhSize((prevSize) => prevSize * 1.5);
    }
    if (currentSlide === "10" && option === "kyknya engga dulu dik") {
      if (clickCount < 7) {
        setClickCount(clickCount + 1);
        setRandomPosition({
          top: Math.random() * 50 - 25 + "px",
          left: Math.random() * 50 - 25 + "px"
        });
        return;
      }
    }
    const nextSlide = transitions[`${currentSlide}-${option}`];
    if (nextSlide) {
      setCurrentSlide(nextSlide);
    }
  };

  const slideData = slides.find(slide => slide.id === currentSlide);

  return (
    <motion.div className="flex flex-col items-center justify-center h-screen bg-pink-200 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <motion.div key={currentSlide} className="bg-white p-6 rounded-2xl shadow-lg text-center w-80" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ type: "spring", stiffness: 120, damping: 10 }}>
        <p className="text-lg font-semibold">{slideData.text}</p>
        <div className="mt-4 space-y-2">
          {slideData.options.map((option) => (
            <motion.div key={option} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={option === "kyknya engga dulu dik" ? { position: "relative", top: randomPosition.top, left: randomPosition.left } : {}}>
              <Button className="w-full bg-pink-400 hover:bg-pink-500" style={option === "apa tuh?" && currentSlide === "7" ? { transform: `scale(${apaTuhSize})` } : {}} onClick={() => handleOptionClick(option)}>
                {option}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
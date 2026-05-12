// src/App.tsx

import {
  createTheme,
  MantineProvider,
} from "@mantine/core";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import FindJobs from "./Pages/FindJobs";
import FindTalent from "./FindTalent/Talent";

/* NEW IMPORT */
import UploadJobs from "./UploadJobs/UploadJobs";
import AboutUs from "./AboutUs/AboutUs"

import Footer from "./Footer.tsx/Footer";
import Header from "./Header/Header";

import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

/* PROFESSIONAL THEME */

const theme = createTheme({

  primaryColor: "brightSun",

  fontFamily: "Poppins, sans-serif",

  defaultRadius: "md",

  colors: {

    /* GOLD/YELLOW BRAND */

    brightSun: [
      "#fffbeb",
      "#fff3c6",
      "#ffe588",
      "#ffd149",
      "#ffbd20",
      "#f99b07",
      "#dd7302",
      "#b75006",
      "#943c0c",
      "#7a330d",
    ],

    /* DARK COLORS */

    mineShaft: [
      "#f6f6f6",
      "#e7e7e7",
      "#d1d1d1",
      "#b0b0b0",
      "#888888",
      "#6d6d6d",
      "#5d5d5d",
      "#4f4f4f",
      "#454545",
      "#1a1a1a",
    ],

  },

  headings: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "700",
  },

  components: {

    Button: {
      defaultProps: {
        radius: "xl",
        size: "md",
      },
    },

    Card: {
      defaultProps: {
        radius: "xl",
        shadow: "lg",
      },
    },

  },

});

function App() {

  return (

    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
    >

      <BrowserRouter>

        {/* MAIN WRAPPER */}
        <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

          {/* BACKGROUND GLOW */}

          <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-[150px] rounded-full z-0"></div>

          <div className="fixed bottom-0 right-0 w-[350px] h-[350px] bg-orange-500/10 blur-[150px] rounded-full z-0"></div>

          {/* GRID OVERLAY */}

          <div className="fixed inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col min-h-screen">

            {/* HEADER */}
            <Header />

            {/* MAIN CONTENT */}
            <main className="flex-grow py-0">

              <Routes>

                {/* HOME PAGE */}
                <Route
                  path="/"
                  element={<Homepage />}
                />

                {/* FIND JOBS */}
                <Route
                  path="/find-jobs"
                  element={<FindJobs />}
                />

                {/* FIND TALENT */}
                <Route
                  path="/find-talent"
                  element={<FindTalent />}
                />

                {/* UPLOAD JOBS */}
                <Route
                  path="/upload-jobs"
                  element={<UploadJobs />}
                />

                <Route
                  path="/About-us"
                  element={<AboutUs />}
                />

                {/* FALLBACK */}
                <Route
                  path="*"
                  element={<Homepage />}
                />

              </Routes>

            </main>

            {/* FOOTER */}
            <Footer />

          </div>

        </div>

      </BrowserRouter>

    </MantineProvider>
  );
}

export default App;
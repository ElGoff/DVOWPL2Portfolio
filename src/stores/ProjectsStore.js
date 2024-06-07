import {defineStore} from "pinia";
import dashbaordImage from "../assets/Dashboard.png";

export const useProjectStore = defineStore("projectStore", {
    state: () => ({
        projects: [
            {
                id: 1,
                title: "Portfolio WPL1",
                description: "Dit is mijn portfolio van WPL1 waar ik aan gewerkt heb",
                isFav: true,
                link: "",
                img: dashbaordImage
            },
            {
                id: 1,
                title: "Graphic Skills 1",
                description: "Pe van Graphic Skills 1",
                isFav: true,
                link: "",
                img: dashbaordImage
            },
            {
                id: 1,
                title: "Duikclub Dolfijn WPL2",
                description: "Dit was mijn case van WPL2 waar ik samen met 3 andere studenten de website van een duikclub heb opgefrist en gemoderniseerd. \n" +
                    "Ik heb mijzelf hier dan vooral gefocust op de achterliggende werking en een paar pagina’s van de site. Mijn collega’s hebben dan meer de design gedaan en meegeholpen aan de front-end. \n",
                isFav: false,
                link: "",
                img: dashbaordImage
            }
        ],
    }),
    getters: {
        favs() {
            return this.projects.filter(t => t.isFav === true);
        },
        selected(){
          return (projectTitle) =>  this.project.filter(t => t.title === projectTitle);
        }
    }
});
import {defineStore} from "pinia";

export const useProjectStore = defineStore("projectstore", {
    state: () => ({
        projects: [],
    }),
    getters:{
        getProjects: (state) => {
        return state.projects;
        },
    },
    actions: {
        fetchProjects(){
            fetch("../data/projects.json")
                .then((response)=> response.json())
                .then((data) => {
                    this.projects = data.projects;
                });
        },
    },
});
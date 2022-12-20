import {defineStore} from "pinia";

export let useChallengesStore = defineStore('district_1', {
    state: () => ({
            name: "Centro Storico",
            numberOfChallenges: 42,
            challenges: [
                {
                    "id": 19,
                    "name": "Zona a traffico limitato",
                    "score": 1,
                    "complete": true
                },
                {
                    "id": 55,
                    "name": "Festival dell'acqua",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 56,
                    "name": "Swap party",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 64,
                    "name": "C'è merce per te!",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 4,
                    "name": "LED a light on",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 6,
                    "name": "Energia all'informazione",
                    "score": 1,
                    "complete": false
                },
                {
                    "id" :8,
                    "name": "Raccolta plastic free",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 10,
                    "name": "Tenga il resto",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 11,
                    "name": "Vesti & Rivesti",
                    "score": 1,
                    "complete": false,
                },
                {
                    "id": 13,
                    "name": "Energy community",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 15,
                    "name": "Riciclaggio pannelli fotovoltaici",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 18,
                    "name": "Hai voluto la bicicletta…",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 20,
                    "name": "Bando ai fossili!",
                    "score": 1,
                    "complete": false
                },
                {
                    "id":22,
                    "name": "Un'auto, tante destinazioni",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 23,
                    "name": "Trasporto notturno",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 24,
                    "name": "Il wifi qui prende",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 25,
                    "name": "Numeri di emergenza",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 26,
                    "name": "Un nuovo parco",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 27,
                    "name": "Andiam, andiam…",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 28,
                    "name": "Frutta e verdura",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 30,
                    "name": "Parcheggi green",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 31,
                    "name": "Amministrazione paper free",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 32,
                    "name": "Il futuro è nel remoto",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 33,
                    "name": "Stop alla coda",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 34,
                    "name": "Buoni mobilità",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 35,
                    "name": "Cassonetti 2.0",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 36,
                    "name": "Co-working",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 37,
                    "name": "Co-working con asilo nido",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 38,
                    "name": "Giro giro tondo",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 40,
                    "name": "Edifici consumo 0",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 43,
                    "name": "Scopriamo la natura",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 44,
                    "name": "Mettici un filtro",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 45,
                    "name": "L'acqua conta",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 46,
                    "name": "I giardini della pioggia",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 47,
                    "name": "Case dell'acqua",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 48,
                    "name": "Il fiume ha la febbre?",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 49,
                    "name": "Mensa riciclona",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 51,
                    "name": "Comune riciclone",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 52,
                    "name": "Per gli amici della bici",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 53,
                    "name": "Zona accessibile",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 54,
                    "name": "Green city app",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 57,
                    "name": "Borraccia blu",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 58,
                    "name": "Non trascuriamo il bordo!",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 59,
                    "name": "Ridurre le perdite",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 60,
                    "name": "Trasparente",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 61,
                    "name": "Energy management",
                    "score": 1,
                    "complete": false
                },
                {
                    "id": 63,
                    "name": "Il cestino intelligente",
                    "score": 1,
                    "complete": false
                }
            ]
        }),
    actions: {
        // fill storage with infos from json file.
        async fill() {
            let r = await import("@/stores/challengeStore.json");
            let data = r.default;

            this.district = data.district;
            this.NumberOfChallenges = data.NumberOfChallenges;
            this.challenges = data.challenges;
        }
    },
    getters: {
        inProgressChallenges() {
            return this.challenges.filter(a => ! a.complete);
        },
        completedChallenges() {
            return this.challenges.filter(a => a.complete);
        },
    }
})
import {defineStore} from "pinia";

export let useChallengesStore = defineStore('city', {
    state: () => ({
        challenges: [
            {
                "id": 1,
                "name": "Zona a traffico limitato",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 2,
                "name": "Festival dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 3,
                "name": "Swap party",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 4,
                "name": "C'è merce per te!",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 5,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 6,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 7,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 8,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 9,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false,
            },
            {
                "id": 10,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 11,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 12,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 13,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id":14,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 15,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 16,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 17,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 18,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 19,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 20,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 21,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 22,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 23,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 24,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 25,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 26,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 27,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 28,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 29,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 30,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 31,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 32,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 33,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 34,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 35,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 36,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 37,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 38,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 39,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 40,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 41,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 42,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 43,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 44,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 45,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 46,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 47,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 48,
                "name": "Travel Power",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 49,
                "name": "Trasporto via droni",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 50,
                "name": "Kilometro 0",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 51,
                "name": "Compra il giusto",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 52,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 53,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 54,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 55,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 56,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false,
            },
            {
                "id": 57,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 58,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 59,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 60,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id":61,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 62,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 64,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 65,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 66,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 67,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 68,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 69,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 70,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 71,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 72,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 73,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 74,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 75,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 76,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 77,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 78,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 79,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 80,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 81,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 82,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 83,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 84,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 85,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 86,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 87,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 88,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 89,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 90,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 91,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 92,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 93,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 94,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 95,
                "name": "Isola tecno-ecologica",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 96,
                "name": "L'odore della paura",
                "cost": 4,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 97,
                "name": "Manna dal cielo",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 98,
                "name": "Efficienza energetica",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 99,
                "name": "Industria 4.0",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 100,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 101,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 102,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 103,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 104,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false,
            },
            {
                "id": 105,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 106,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 107,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 108,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 109,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 110,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 111,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 112,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 113,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 114,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 115,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 116,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 117,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 118,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 119,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 120,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 121,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 122,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 123,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 124,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 125,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 126,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 127,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 128,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 129,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 130,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 131,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 132,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 133,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 134,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 135,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 136,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 137,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 138,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 139,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 140,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 141,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 142,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 143,
                "name": "Energia: ungioco da ragazzi",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
        ]
    }),
    actions: {
        // fill storage with infos from json file.
        async fill() {
            let r = await import("@/stores/challengeStore.json");
            let data = r.default;

            this.district = data.district;
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
        visibleImages() {
            return [{
                "id": 0,
                "name": "background",
            }, ...new Set(this.challenges.filter(a => a.complete))];
        },
        allDistricts() {
            return [...new Set(this.challenges.map(a => a.district))];
        },
        impactSum() {
            return this.challenges.filter(a => a.complete).reduce((sum, item) => sum + item.impact, 0)
        }
    }
})
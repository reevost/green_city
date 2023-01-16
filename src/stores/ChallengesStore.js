import {defineStore} from "pinia";

export let useChallengesStore = defineStore('city', {
    state: () => ({
        challenges: [
            {
                "id": 19,
                "name": "Zona a traffico limitato",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 55,
                "name": "Festival dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 56,
                "name": "Swap party",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 64,
                "name": "C'è merce per te!",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 4,
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
                "id": 8,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 10,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 11,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false,
            },
            {
                "id": 13,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 15,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 18,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 20,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id":22,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 23,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 24,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 25,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 26,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 27,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 28,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 30,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 31,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 32,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 33,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 34,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 35,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 36,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 37,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 38,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 40,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 43,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 44,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 45,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 46,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 47,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 48,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 49,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 51,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 52,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 53,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 54,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 57,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 58,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 59,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 60,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 61,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "centro storico",
                "complete": false
            },
            {
                "id": 2,
                "name": "Travel Power",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 12,
                "name": "Trasporto via droni",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 29,
                "name": "Kilometro 0",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 39,
                "name": "Compra il giusto",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 4,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 6,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 8,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 10,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 11,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false,
            },
            {
                "id": 13,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 15,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 18,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 20,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id":22,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 23,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 24,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 25,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 26,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 27,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 28,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 30,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 31,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 32,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 33,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 34,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 35,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 36,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 37,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 38,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 40,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 43,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 44,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 45,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 46,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 47,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 48,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 49,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 51,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 52,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 53,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 54,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 57,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 58,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 59,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 60,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 61,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "commerciale",
                "complete": false
            },
            {
                "id": 1,
                "name": "Isola tecno-ecologica",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 16,
                "name": "L'odore della paura",
                "cost": 4,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 42,
                "name": "Manna dal cielo",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 50,
                "name": "Efficienza energetica",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 62,
                "name": "Industria 4.0",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 4,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 6,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 8,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 10,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 11,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false,
            },
            {
                "id": 13,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 15,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 18,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 20,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id":22,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 23,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 24,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 25,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 26,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 27,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 28,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 30,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 31,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 32,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 33,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 34,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 35,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 36,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 37,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 38,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 40,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 43,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 44,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 45,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 46,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 47,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 48,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 49,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 51,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 52,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 53,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 54,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 57,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 58,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 59,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 60,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 61,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "industriale",
                "complete": false
            },
            {
                "id": 3,
                "name": "Energia: ungioco da ragazzi",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 14,
                "name": "Case da smontare",
                "cost": 3,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 17,
                "name": "C'è spazio per tutti",
                "cost": 5,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 21,
                "name": "Abitare insieme",
                "cost": 5,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 4,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 6,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 8,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 10,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 11,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false,
            },
            {
                "id": 13,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 15,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 18,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 20,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id":22,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 23,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 24,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 25,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 26,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 27,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 28,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 30,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 31,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 32,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 33,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 34,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 35,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 36,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 37,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 38,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 40,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 43,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 44,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 45,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 46,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 47,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 48,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 49,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 51,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 52,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 53,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 54,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 57,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 58,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 59,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 60,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 61,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "residenziale",
                "complete": false
            },
            {
                "id": 5,
                "name": "Apprendimento a caldo",
                "cost": 4,
                "impact": 3,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 7,
                "name": "Il gioco nel gioco",
                "cost": 2,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 9,
                "name": "Scuole plastic free",
                "cost": 1,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 41,
                "name": "Libri digitali",
                "cost": 3,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 4,
                "name": "LED a light on",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 6,
                "name": "Energia all'informazione",
                "cost": 2,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 8,
                "name": "Raccolta plastic free",
                "cost": 1,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 10,
                "name": "Tenga il resto",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 11,
                "name": "Vesti & Rivesti",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false,
            },
            {
                "id": 13,
                "name": "Energy community",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 15,
                "name": "Riciclaggio pannelli fotovoltaici",
                "cost": 5,
                "impact": 3,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 18,
                "name": "Hai voluto la bicicletta…",
                "cost": 4,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 20,
                "name": "Bando ai fossili!",
                "cost": 1,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id":22,
                "name": "Un'auto, tante destinazioni",
                "cost": 4,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 23,
                "name": "Trasporto notturno",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 24,
                "name": "Il wifi qui prende",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 25,
                "name": "Numeri di emergenza",
                "cost": 1,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 26,
                "name": "Un nuovo parco",
                "cost": 4,
                "impact": 3,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 27,
                "name": "Andiam, andiam…",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 28,
                "name": "Frutta e verdura",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 30,
                "name": "Parcheggi green",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 31,
                "name": "Amministrazione paper free",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 32,
                "name": "Il futuro è nel remoto",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 33,
                "name": "Stop alla coda",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 34,
                "name": "Buoni mobilità",
                "cost": 1,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 35,
                "name": "Cassonetti 2.0",
                "cost": 3,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 36,
                "name": "Co-working",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 37,
                "name": "Co-working con asilo nido",
                "cost": 4,
                "impact": 3,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 38,
                "name": "Giro giro tondo",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 40,
                "name": "Edifici consumo 0",
                "cost": 5,
                "impact": 3,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 43,
                "name": "Scopriamo la natura",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 44,
                "name": "Mettici un filtro",
                "cost": 4,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 45,
                "name": "L'acqua conta",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 46,
                "name": "I giardini della pioggia",
                "cost": 3,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 47,
                "name": "Case dell'acqua",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 48,
                "name": "Il fiume ha la febbre?",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 49,
                "name": "Mensa riciclona",
                "cost": 2,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 51,
                "name": "Comune riciclone",
                "cost": 2,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 52,
                "name": "Per gli amici della bici",
                "cost": 3,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 53,
                "name": "Zona accessibile",
                "cost": 4,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 54,
                "name": "Green city app",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 57,
                "name": "Borraccia blu",
                "cost": 2,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 58,
                "name": "Non trascuriamo il bordo!",
                "cost": 4,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 59,
                "name": "Ridurre le perdite",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 60,
                "name": "Trasparente",
                "cost": 3,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 61,
                "name": "Energy management",
                "cost": 3,
                "impact": 2,
                "district": "scolastico",
                "complete": false
            },
            {
                "id": 63,
                "name": "Il cestino intelligente",
                "cost": 5,
                "impact": 1,
                "district": "scolastico",
                "complete": false
            }
        ]
    }),
    actions: {
        // fill storage with infos from json file.
        async fill(allowedDistricts) {
            let r = await import("@/stores/challengeStore.json");
            let data = r.default;
            this.challenges = data.challenges.filter(a => allowedDistricts.include(a.district));
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
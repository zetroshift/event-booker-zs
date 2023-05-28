Šio failo paskirtis yra trumpai nupasakoti programos funkcionalumą ir kaip ją pasileisti.

Programos paskirtis,kaip ir nurodyta užduotyje, yra paprasta - registruoti į duomenų bazę klientus, užsiregistravusius į renginį.

Kadangi programa yra itin paprasta (dėl laiko trūkumo supaprastinta), norint užregistruoti asmenį į renginį, tereikia suvesti jo duomenis į atitinkamus laukelius ir paspausti "Submit" mygtuką. Jį paspaudus apačioje atsiras įrašas ir padidės užregistruotų dalyvių skaičius tam skirtame laukelyje. Norint ištrinti įrašą, tereikia paspausti "Delete entry" mygtuką ir įrašas dings.

Norint pasileisti programą, reiktų sekti šiuos žingsnius.

1. Įsirašyti reikiamus dependencies.
2. Paleisti duomenų bazę naudojant "mongosh" komandą terminale.
3. Paleisti serverį naudojant "node server.js" komandą naujame terminalo lange, esant server aplanke.
4. Esant pagrindiniame aplikacijos aplanke, norint paleisti ir vizualiai matyti pačią aplikaciją, reikia naujame terminalo lange suvesti komandą "npm run dev" ir nukopijuoti duotą nuorodą, kurią reikia įklijuoti į naršyklės URL lauką ir paspausti "Enter" klavišą.

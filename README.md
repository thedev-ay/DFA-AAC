# DFA Appointment Availability Checker (DFA-AAC)

The application checks for available timeslots for passport appointment and notifies applicant via email.

## Getting Started

1. Install Dependencies
```bash
$ npm install
```

2. Rename config file
```
$ mv .env.sample .env
```

3. Update config
```
DFA_APPOINTMENT_URI=https://www.passport.gov.ph/appointment
DFA_BRANCH_ID=<See list below>

MAIL_SERVICE=gmail
MAIL_USER=<Sender's Email Address>
MAIL_PASS=<Sender's Email Password>
MAIL_RECIPIENTS=<Recipients' Email Addresses (comma-separated)>

POLL_INTERVAL_MINUTES=1
```
[List of branches](#list-of-dfa-branches)

4. Start
```
$ npm start
```

## List of DFA Branches
| Id  | Name                                              |
|-----|---------------------------------------------------|
| 10  | Angeles (MarQuee Mall,Angeles, Pampanga)          |
| 486 | Antipolo (SM Cherry, Antipolo City, Rizal)        |
| 11  | Bacolod (Robinsons Bacolod)                       |
| 12  | Baguio (SM City Baguio)                           |
| 14  | Butuan (Robinsons Butuan)                         |
| 15  | Cagayan De Oro (Centrio Mall, CDO City)           |
| 16  | Calasiao (Robinsons Calasiao, Pangasinan)         |
| 17  | Cebu (Pacific Mall Metro Mandaue, Cebu)           |
| 487 | Clarin (Town Center,,Clarin, Misamis OCC)         |
| 18  | Cotabato (Mall of Alnor, Cotabato City)           |
| 4   | DFA Manila (Aseana)                               |
| 516 | DFA Manila (Aseana-Courtesy Lane)                 |
| 5   | DFA NCR Central (Robinsons Galleria EDSA)         |
| 6   | DFA NCR East (SM Megamall, Mandaluyong City)      |
| 423 | DFA NCR North (Robinsons Novaliches, Quezon City) |
| 7   | DFA NCR Northeast (Ali Mall Cubao, Quezon City)   |
| 8   | DFA NCR South (Metro ATC, Muntinlupa City)        |
| 9   | DFA NCR West (SM City, Manila)                    |
| 488 | Dasmariñas ( SM City Dasmariñas)                  |
| 19  | Davao (SM City Davao)                             |
| 20  | Dumaguete (Robinsons Dumaguete)                   |
| 21  | General Santos (Robinsons Gen. Santos City)       |
| 424 | Ilocos Norte (Robinsons Place, San Nicolas)       |
| 22  | Iloilo (Robinsons Iloilo)                         |
| 23  | La Union (Manna Mall San Fernando, La Union)      |
| 24  | Legazpi (Pacific Mall Legazpi)                    |
| 13  | Lipa (Robinsons Lipa)                             |
| 25  | Lucena (Pacific Mall, Lucena)                     |
| 489 | Malolos (CTTCH.,Xentro Mall, Malolos City)        |
| 122 | POW MOBILE 01 SITE                                |
| 27  | Pampanga (Robinsons StarMills San Fernando)       |
| 553 | Paniqui,  Tarlac (WalterMart)                     |
| 26  | Puerto Princesa (Robinsons Palawan)               |
| 490 | San Pablo ( Sm City San Pablo)                    |
| 425 | Santiago, Isabela (Robinsons Place Santiago)      |
| 28  | Tacloban (Robinsons N. Abucay, Tac. City)         |
| 491 | Tagum ( Gaisano Mall of Tagum )                   |
| 29  | Tuguegarao (Reg. Govt Center, Tuguegarao City)    |
| 30  | Zamboanga (Go-Velayo Bldg. Vet. Ave. Zambo)       |


## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
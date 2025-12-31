function sf(url) {
    const join = url.includes("?") ? "&" : "?";
    return url + join + "autostart=1&ui_infos=0&ui_controls=0&ui_hint=0";
}
const SCENES = {
    hutan: sf("https://sketchfab.com/models/c4017acb351344d79b0b6995e3acb197/embed"),
    kutub: sf("https://sketchfab.com/models/b5ec6c4f13874204a41a54cdc2af0b03/embed"),
    sungai: sf("https://sketchfab.com/models/a1215062294b4ce5b310bab06aa59b06/embed"),
    gurun: sf("https://sketchfab.com/models/fd6a1e8ad77c4273818a036af4c1e7f4/embed"),
    sawah: sf("https://sketchfab.com/models/d4149ca2c45f48bb94940fd6cb62de2d/embed"),
    laut: sf("https://sketchfab.com/models/42b6aa9ad71745f3a9abf08a187cf003/embed"),
};


window.HABITATS = [
    {
        id: "darat",
        title: "Habitat Darat (Tanah)",
        desc: "Habitat darat adalah tempat hidup hewan yang tinggal dan beraktivitas di permukaan tanah. Di habitat ini, hewan mencari makan, bermain, dan berkembang biak dengan menyesuaikan diri dengan lingkungan sekitarnya.",
        scene: null,
        children: [
            {
                id: "hutan",
                title: "Hutan",
                desc: "Hutan adalah wilayah yang dipenuhi oleh banyak pepohonan, tanaman hijau, dan udara yang sejuk. Di tempat ini, berbagai hewan hidup bersama, mencari makan, bermain, dan berlindung dari panas matahari. Hutan juga menjadi tempat penting bagi hewan untuk berkembang biak dan menjaga keseimbangan alam.",
                scene: SCENES.hutan,
                animals: [
                    {
                        name: "Harimau",
                        desc: "Harimau adalah hewan buas yang kuat, cepat, dan pandai berburu. Harimau hidup di hutan karena hutan menyediakan banyak mangsa seperti rusa dan babi hutan. Selain itu, hutan memiliki banyak pepohonan dan semak-semak yang membantu harimau bersembunyi saat mengintai mangsanya. Loreng pada tubuh harimau juga berfungsi sebagai kamuflase agar menyatu dengan lingkungan hutan.",
                        embed: sf("https://sketchfab.com/models/5bd4cedffadf4dfaa6b706b81e92bd7b/embed")
                    },
                    {
                        name: "Monyet",
                        desc: "Monyet adalah hewan yang lincah dan pandai memanjat pohon. Ia hidup di hutan karena hutan memiliki banyak pohon tinggi yang dapat digunakan untuk bergerak, bermain, dan berlindung dari musuh. Di hutan, monyet juga mudah menemukan makanan seperti buah-buahan, daun, dan biji-bijian yang tumbuh di pepohonan.",
                        embed: sf("https://sketchfab.com/models/e806b031d9d846568ececd000cea4c3f/embed")
                    },
                    {
                        name: "Gajah",
                        desc: "Gajah adalah hewan besar yang hidup di hutan karena membutuhkan area yang luas untuk bergerak dan mencari makan. Hutan menyediakan banyak tumbuhan, daun, dan air yang dibutuhkan gajah setiap hari. Belalai panjangnya membantu gajah mengambil makanan, minum air, dan merawat tubuhnya di lingkungan hutan.",
                        embed: sf("https://sketchfab.com/models/d53f4e537d07419caefabef2cd4bbf7b/embed")
                    },
                ],

            },
            {
                id: "gurun",
                title: "Gurun (Padang Pasir)",
                desc: "Gurun adalah wilayah yang sangat panas pada siang hari dan terasa dingin pada malam hari. Daerah ini dipenuhi pasir dan jarang turun hujan. Hewan yang hidup di gurun memiliki kemampuan khusus, seperti menyimpan air dan beradaptasi dengan cuaca yang ekstrem.",
                scene: SCENES.gurun,
                animals: [
                    {
                        name: "Unta",
                        desc: "Unta adalah hewan yang hidup di gurun karena mampu bertahan di lingkungan yang panas dan kering. Unta memiliki kemampuan menyimpan cadangan energi di tubuhnya sehingga tidak mudah haus dan lapar. Kakinya yang panjang dan kuat membantu berjalan di atas pasir panas, membuatnya sangat cocok hidup di gurun.",
                        embed: sf("https://sketchfab.com/models/de90552f89cd4401a98c89d125ec1c75/embed")
                    },
                    {
                        name: "Kalajengking",
                        desc: "Kalajengking hidup di gurun karena tubuhnya mampu bertahan di tempat yang panas dan kering. Ia sering bersembunyi di pasir atau celah batu untuk menghindari panas matahari. Sengat di ekornya digunakan untuk melindungi diri dari musuh, sehingga kalajengking dapat bertahan hidup di lingkungan gurun yang keras.",
                        embed: sf("https://sketchfab.com/models/32e8c714b54e4833af1e58a38511bcf9/embed")
                    },
                ],

            },
            {
                id: "kutub",
                title: "Kutub (Es)",
                desc: "Kutub adalah wilayah yang sangat dingin dan hampir selalu tertutup oleh es dan salju. Hewan yang tinggal di daerah ini memiliki bulu tebal atau lapisan lemak untuk menjaga tubuh tetap hangat.Mereka juga terbiasa hidup di suhu yang sangat rendah.",
                scene: SCENES.kutub,
                animals: [
                    {
                        name: "Beruang Kutub",
                        desc: "Beruang kutub hidup di daerah es karena tubuhnya dirancang untuk cuaca yang sangat dingin. Bulu putihnya membantu menyamarkan diri di salju, sedangkan lapisan lemak tebal menjaga tubuhnya tetap hangat. Beruang kutub juga pandai berenang untuk mencari makanan di perairan dingin sekitar kutub.",
                        embed: sf("https://sketchfab.com/models/aace9b5d022b48669172c5d6437423ed/embed")
                    },
                    {
                        name: "Pinguin",
                        desc: "Pinguin hidup di daerah kutub karena tubuhnya mampu bertahan di suhu dingin. Walaupun tidak bisa terbang, pinguin sangat pandai berenang dan mencari ikan di laut. Bulu tebal dan lapisan lemaknya membantu menjaga suhu tubuh agar tetap hangat di lingkungan es.",
                        embed: sf("https://sketchfab.com/models/52ee7af12da548748e44c078d202c577/embed")
                    },
                ],

            },
            {
                id: "sawah",
                title: "Sawah / Kebun",
                desc: "Sawah dan kebun adalah lingkungan yang dekat dengan kehidupan manusia dan sering dijumpai di sekitar rumah. Di tempat ini, terdapat banyak hewan ternak dan hewan kecil yang hidup berdampingan dengan manusia. Sawah dan kebun juga menjadi tempat hewan mencari makan dan berlindung.",

                scene: SCENES.sawah,
                animals: [
                    {
                        name: "Ayam",
                        desc: "Ayam hidup di sawah atau kebun karena lingkungan ini dekat dengan manusia dan menyediakan banyak makanan. Ayam dapat mencari biji-bijian, serangga, dan sisa tanaman di tanah. Selain itu, ayam sering dipelihara manusia sehingga terbiasa hidup di lingkungan kebun dan pekarangan.",
                        embed: sf("https://sketchfab.com/models/c37f16776697416cafc5e97dc41721c9/embed")
                    },
                    {
                        name: "Kambing",
                        desc: "Kambing hidup di sawah atau kebun karena banyak tersedia rumput dan daun sebagai makanannya. Lingkungan ini juga cukup terbuka sehingga kambing mudah bergerak dan mencari makan. Karena sifatnya jinak, kambing sering dipelihara manusia di sekitar kebun atau ladang.",
                        embed: sf("https://sketchfab.com/models/3a8f22fa7c0b4719aaede75611b5588a/embed")
                    },
                    {
                        name: "Sapi",
                        desc: "Sapi hidup di sawah atau ladang karena membutuhkan banyak rumput sebagai makanan utama. Area sawah dan kebun menyediakan ruang luas untuk merumput dan bergerak. Sapi juga merupakan hewan ternak yang dipelihara manusia untuk diambil manfaatnya seperti susu dan daging.",
                        embed: sf("https://sketchfab.com/models/0b95a1b2c29b4c4c86a89093171915a9/embed")
                    },
                ],

            },
        ],
    },

    {
        id: "air",
        title: "Habitat Air",
        desc: "Habitat air adalah tempat hidup hewan yang tinggal dan bergerak di dalam air, seperti sungai, danau, atau laut. Hewan air memiliki cara khusus untuk bernapas dan bergerak agar dapat bertahan hidup di lingkungannya.",
        scene: SCENES.laut,
        children: [
            {
                id: "laut",
                title: "Air Laut (Asin)",
                desc: "Air laut asin dan berombak.",
                scene: null,
                animals: [
                    {
                        name: "Ikan Hiu",
                        desc: "Ikan hiu adalah predator laut yang hidup di air laut karena tubuhnya dirancang untuk berenang cepat dan kuat. Hiu bernapas dengan insang dan memiliki sirip yang membantu bergerak lincah di dalam air. Laut menyediakan ruang luas dan banyak mangsa, sehingga hiu dapat berburu dan bertahan hidup dengan baik di habitat ini.",
                        embed: sf("https://sketchfab.com/models/33039a0ef3644759bfc2baac57840bb3/embed")
                    },
                    {
                        name: "Paus",
                        desc: "Paus adalah mamalia laut berukuran sangat besar yang hidup di lautan karena membutuhkan ruang yang luas untuk berenang. Walaupun bernapas dengan paru-paru, paus hidup di air karena makanan utamanya, seperti ikan kecil dan plankton, berada di laut. Laut juga membantu menopang berat tubuh paus yang besar.",
                        embed: sf("https://sketchfab.com/models/174dc4d068984453b78dfe8a46929e19/embed")
                    },
                    {
                        name: "Lumba-lumba",
                        desc: "Lumba-lumba adalah mamalia laut yang cerdas dan ramah. Ia hidup di laut karena sangat pandai berenang dan mencari makanan di dalam air. Tubuhnya yang ramping dan siripnya membantu bergerak cepat, sehingga laut menjadi habitat yang paling sesuai bagi lumba-lumba.",
                        embed: sf("https://sketchfab.com/models/f82d34feabf4420587461a1ae9dfbea2/embed")
                    },
                ],

            },
            {
                id: "tawar",
                title: "Air Tawar (Sungai / Danau)",
                desc: "Air tawar ada di sungai dan danau.",
                scene: SCENES.sungai,
                animals: [
                    {
                        name: "Ikan Mas",
                        desc: "Ikan mas hidup di air tawar seperti kolam dan sungai karena bernapas menggunakan insang yang bekerja dengan baik di dalam air. Air tawar menyediakan makanan alami seperti tumbuhan air dan hewan kecil. Oleh karena itu, ikan mas cocok hidup dan berkembang biak di habitat ini.",
                        embed: sf("https://sketchfab.com/models/3dc0b916e4e94c38ac90ae15bce034ab/embed")
                    },
                    {
                        name: "Ikan Lele",
                        desc: "Ikan lele hidup di air tawar dan sering berada di dasar air. Tubuhnya memungkinkan lele bertahan di air yang keruh dan tenang. Kumis di sekitar mulutnya membantu mencari makanan, sehingga sungai dan kolam menjadi habitat yang cocok bagi ikan lele.",
                        embed: sf("https://sketchfab.com/models/9feded3e6f1248dcadbdbdb584e91efc/embed")
                    },
                    {
                        name: "Ikan Nila",
                        desc: "Ikan nila hidup di air tawar seperti kolam dan danau karena mudah menyesuaikan diri dengan lingkungan tersebut. Air tawar menyediakan makanan dan tempat berkembang biak yang aman, sehingga ikan nila sering dibudidayakan oleh manusia.",
                        embed: sf("https://sketchfab.com/models/f5e4046b1d4e4a1da0a8415df5e22c72/embed")
                    },
                ],

            },
        ],
    },

    {
        id: "amfibi",
        title: "Habitat Darat & Air (2 Tempat)",
        desc: "Habitat darat dan air adalah tempat hidup hewan yang dapat tinggal di dua lingkungan berbeda. `Hewan di habitat ini bisa hidup di darat dan juga di air, sehingga mereka memiliki kemampuan khusus untuk menyesuaikan diri dengan kedua tempat tersebut.",
        scene: null,
        children: [
            {
                id: "dua-tempat",
                title: "2 Tempat",
                desc: "Hidup di darat dan air.",
                scene: SCENES.sungai,
                animals: [
                    {
                        name: "Katak",
                        desc: "Katak hidup di darat dan di air karena membutuhkan kedua lingkungan tersebut. Katak sering berada di air untuk berenang dan berkembang biak, sedangkan di darat untuk mencari makan. Kulitnya yang lembap membantu bernapas, sehingga katak cocok hidup di dua habitat ini.",
                        embed: sf("https://sketchfab.com/models/ebce6aa962db491d87619a6a31a7af99/embed")
                    },
                    {
                        name: "Buaya",
                        desc: "Buaya hidup di darat dan di air karena tubuhnya dirancang untuk kedua lingkungan tersebut. Buaya sering berjemur di darat untuk menghangatkan tubuh, namun juga sangat pandai berenang di air untuk berburu mangsa. Sungai dan rawa menjadi habitat yang ideal bagi buaya.",
                        embed: sf("https://sketchfab.com/models/64bc4823ce7448b3b49ace2aa5d16ffb/embed")
                    },
                    {
                        name: "Kura-kura",
                        desc: "Kura-kura hidup di darat dan di air karena memiliki tubuh yang dapat beradaptasi di kedua tempat. Ia sering berada di air untuk berenang dan mencari makanan, serta naik ke darat untuk beristirahat. Cangkang kerasnya melindungi kura-kura dari bahaya di lingkungan sekitarnya.",
                        embed: sf("https://sketchfab.com/models/28ee75be522c40e5be5a26e75bf22a54/embed")
                    },
                ],

            },
        ],
    },
];


window.QUIZ = [
    {
        q: "1. Hewan manakah yang menghabiskan seluruh waktunya di dalam air dan bernapas dengan insang?",
        hint: "Cari hewan yang memiliki sirip dan tidak bisa hidup di darat.",
        options: [
            { text: "Kucing", correct: false },
            { text: "Ikan Mas", correct: true },
            { text: "Burung Elang", correct: false },
            { text: "Monyet", correct: false },
        ],
    },
    {
        type: "fill",
        q: "2. Susun huruf berikut menjadi nama hewan yang hidup di air!",
        hint: "Hewan ini bernapas dengan insang.",
        pattern: "I__N",
        answer: "IKAN",
        pool: ["K", "A", "U", "R"],
    },

    {
        q: "3. Katak disebut sebagai hewan amfibi. Apa artinya?",
        hint: "Amfibi berarti dua jenis kehidupan.",
        options: [
            { text: "Bisa terbang di udara", correct: false },
            { text: "Bisa hidup di darat dan di air", correct: true },
            { text: "Hanya bisa hidup di darat", correct: false },
            { text: "Hanya bisa hidup di air", correct: false },
        ],
    },
    {
        type: "fill",
        q: "4. Lengkapi nama hewan yang sering berjemur di pinggir sungai!",
        hint: "Hewan ini punya gigi tajam dan tubuh besar.",
        pattern: "B__Y_",
        answer: "BUAYA",
        pool: ["U", "A", "Y", "B", "K", "A", "N"],
    },
    {
        q: "5. Unta adalah hewan yang sangat kuat menahan haus. Di habitat manakah unta biasanya tinggal?",
        hint: "Tempat ini panas, luas, dan penuh pasir.",
        options: [
            { text: "Hutan", correct: false },
            { text: "Kutub Utara", correct: false },
            { text: "Sungai", correct: false },
            { text: "Gurun Pasir", correct: true },
        ],
    },
    {
        type: "fill",
        q: "6. Susun kata berikut menjadi hewan yang hidup di daerah dingin!",
        hint: "Hewan besar berbulu tebal dan hidup di es.",
        pattern: "B_R___G",
        answer: "BERUANG",
        pool: ["E", "U", "A", "N", "G", "K"],
    },
];

window.BG = {
    default: "./assets/7.webp",

    darat: "./assets/7.webp",
    air: "./assets/6.webp",
    amfibi: "./assets/5.webp",

    hutan: "./assets/1.webp",
    gurun: "./assets/2.webp",
    kutub: "./assets/3.webp",
    sawah: "./assets/4.webp",
    sungai: "./assets/5.webp",
    laut: "./assets/6.webp",
};

import { StaticImageData } from "next/image";

import vanGoghPortrait, {
    almondBlossom,
    bedroomInArles,
    cafeTerraceAtNight,
    starryNight,
    twoCutSunflowers,
} from "./artists/van-gogh";

import picassoPortrait, {
    garconALaPipe,
    gertrudeStein,
    guernica,
    lesDemoisellesDAvingon,
    vieuxGuitaristeAveugle
} from "./artists/picasso";

import daliPortrait from "./artists/dali";
import monetPortrait from "./artists/monet";
import munchPortrait from "./artists/munch";
import paulRubensPortrait, { descentFromTheCross, massacreOfTheInnocents, prometheusBound, theHippopotamusAndCrocodileHunt, theJudgmentOfParis } from "./artists/paul-rubens";
import rembrandtPortrait from "./artists/rembrandt";

export type Artwork = {
    name: string;
    image: StaticImageData | string | undefined;
    completedIn: string;
    description: string | undefined;
}

export type Artist = {
    nickname: string;
    fullName: string;
    borIn: string | undefined;
    diedIn: string | undefined;
    movement: string;
    portrait: StaticImageData | undefined;
    description: string | undefined;
    artworks: Artwork[];
}

export type Language = "pt" | "en"

export type Data = {
    language: Record<Language, Artist[]>
}

const data: Data = {
    language: {
        pt: [
            {
                nickname: "Van Gogh",
                fullName: "Vincent Willem van Gogh",
                borIn: "3/30/1853/Países Baixos",
                diedIn: "7/29/1890/França",
                movement: "Pós-impressionismo",
                portrait: vanGoghPortrait,
                description: "Vincent Willem van Gogh foi um artista pós-impressionista holandês que emergiu como uma das mais famosas figuras na historia da arte ocidental após sua morte. As paisagens, artes mortas, retratos e auto-retratos são caracterizados por vibrantes contrastes de cores complementares, pincelas exprecivas e planos lineares abstratos, inspirados pelas impressões japonêsas que ele adquiria e admirava. Suas inovações contribuiram para a fundação da arte moderna. As imagens de Van Gogh geralmente refletem simbolismo pessoas, experiêncais e emoções que ele discutiu em correspondência a sua família e amigos. Ele expressou o desejo de comunicar felicidade e conforto por meio de sua arte, inspirado a reunir uma comunidade de artistas com o mesmo pensamento no sul da França. Van Gogh nunca conseguiu sucesso comercial em seu tempo de vida e dependia do suporte financeiro do seu irmão, Theo Van Gogh. Sua vida foi formada por uma depressão severa e episódios de estresse psicológico agudo. Vincent cometeu suicídio aos 37 anos",
                artworks: [
                    {
                        name: "Noite Estrelada",
                        image: starryNight,
                        completedIn: "1889",
                        description: "Van Gogh criou esta pintura depois de um grande surto mental, onde se sentiu triste e suicida. As ondas no céu refletem sua turbulência emocional. O cenário da pintura retrata a visão de Saint-Rémy-de-Provence, que Van Gogh viu da janela de seu quarto"
                    },
                    {
                        name: "Terraço do Café à Noite",
                        image: cafeTerraceAtNight,
                        completedIn: "1888",
                        description: "Van Gogh posicionou seu cavalete ao ar livre, a tarde, para pintar o cenário. Isso foi uma prática que ele adquiriu dos impressionistas em Paris. De todo modo, ele não pintou a cena como observou, mas sim, usou cor e técnicas de pinceladas para retratar suas emoções. Nessa pintura, Van Gogh apresenta entusiasmo e alegria"
                    },
                    {
                        name: "Girassóis",
                        image: twoCutSunflowers,
                        completedIn: "1888",
                        description: "Van Gogh queria decorar o quarto de seu visitante, Paul Gauguin, como ele estava se juntando a Willem em Arles, para que eles pudessem pintar juntos"
                    },
                    {
                        name: "Quarto em Arles",
                        image: bedroomInArles,
                        completedIn: "1888",
                        description: "Enquanto em Arles, Van Gogh fez esta pentura de seu quarto na casa amarela. Ele preparou o quarto com móveis simples e com seus próprios trabalhos na parede"
                    },
                    {
                        name: "Amendoeira em Flor",
                        image: almondBlossom,
                        completedIn: "1890",
                        description: "Grandes galhos de desabroxam sob o céu azul. Flores de amendoeira aparecem na primavera,  tornando-as simbolo de uma nova vida"
                    }
                ]
            },
            {
                nickname: "Picasso",
                fullName: "Pablo Diego José Francisco de Paula Juan Nepomuceno Crispín Crispiniano María Remedios de la Santísima Trinidad Ruiz Picasso",
                borIn: "10/25/1881/Espanha",
                diedIn: "4/8/1973/França",
                movement: "Cubismo",
                portrait: picassoPortrait,
                description: "Um dos mais influentes artistas do século 20, ele é conhecido por ser o co-fundador do movimento cubista, o invetor da arte cinética, o co-inventor da colagem e por uma grande variedade de estilos que ele ajudou a desenvolver e explorar. O trabalho de picasso é frequentemente categorizado em períodos. Enquanto o nome de vários de seus períodos posteriores ainda são debatidos, os períodos mais comumente aceitos em seu trabalho são o Período Azul, Período Rosé, Período de Afro-Influencia, Cubismo Analítico e o Cubismo Sintético, também chamado de Período de Cristal",
                artworks: [
                    {
                        name: "Guernica",
                        image: guernica,
                        completedIn: "1937",
                        description: "Picasso disse pouco sobre o significado da pintura, deixando a interpretação para apreciadores, criticos e historiadores da arte. Embora seja claramente uma resposta emocional a violência sem sentido da guerra, principalmente a Guerra Civil Espanhola."
                    },
                    {
                        name: "Vieux guitariste aveugle",
                        image: vieuxGuitaristeAveugle,
                        completedIn: "1904",
                        description: "A pintura reflete a luta pessoal e a simpatia de Picasso, de 22 anos, pela situação dos oprimidos."
                    },
                    {
                        name: "Les Demoiselles D'Avignon",
                        image: lesDemoisellesDAvingon,
                        completedIn: "1907",
                        description: "It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks"
                    },
                    {
                        name: "Gertrude Stein",
                        image: gertrudeStein,
                        completedIn: "1906",
                        description: "An portrait of the famous writer and expatriate Gertrude Stein"
                    },
                    {
                        name: "Garçon à la Pipe",
                        image: garconALaPipe,
                        completedIn: "1905",
                        description: "The painting depicts an boy wearing a headpiece of flowers, holding a pipe, with more flowers appearing in the background"
                    }
                ]
            },
            {
                nickname: "Gustave Dore",
                fullName: "Paul-Gustave Doré",
                borIn: "1/6/1832/França",
                diedIn: "1/23/1883/França",
                movement: "Romantism",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "La Siesta",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gustave_Dore_-_La_Siesta%2C_Memory_of_Spain_-_Google_Art_Project.jpg/1200px-Gustave_Dore_-_La_Siesta%2C_Memory_of_Spain_-_Google_Art_Project.jpg",
                        completedIn: "1868",
                        description: undefined
                    },
                    {
                        name: "The Enigma",
                        image: "https://i.pinimg.com/originals/22/3a/05/223a05e867dc521bc250a8a4d2f897d0.jpg",
                        completedIn: "1871",
                        description: "The Enigma features a scene of carnage, as a city burns and bodies are strewn right across the composition. This artwork followed on soon after France's defeat to Prussia a year earlier"
                    },
                    {
                        name: "Dante and Virgil in the Ninth Circle of Hell",
                        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Gustave_Dor%C3%A9_-_Dante_et_Virgile_dans_le_neuvi%C3%A8me_cercle_de_l%27Enfer.jpg",
                        completedIn: "1861",
                        description: "In Dante's 'Inferno,' Dante himself is led through the nine circles of hell by the ancient poet Virgil, finally arriving at the ninth circle where those who hate the idea of love reside, including Satan himself. Since love brings warmth and comfort. They claw and bite at one another and writhe in pain"
                    },
                    {
                        name: "Oceanides",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Les_Oceanides_Les_Naiades_de_la_mer.jpg",
                        completedIn: "1869",
                        description: "Based on the ancient Greek tragedy Prometheus Bound, the painting depicts a group of nymphs at a rock in the ocean. In the background, the Titan Prometheus is chained to a cliff, a punishment given to him by Zeus after he stole fire from the gods and gave it to mankind"
                    },
                    {
                        name: "Alpine Scene",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Gustave_Dor%C3%A9_-_Alpine_Scene_-_1967.588_-_Art_Institute_of_Chicago.jpg/1200px-Gustave_Dor%C3%A9_-_Alpine_Scene_-_1967.588_-_Art_Institute_of_Chicago.jpg",
                        completedIn: "1865",
                        description: undefined
                    }
                ]
            },
            {
                nickname: "Dalí",
                fullName: "Salvador Domingo Felipe Jacinto Dalí i Domènech",
                borIn: "5/11/1904/Espanha",
                diedIn: "1/23/1989/Espanha",
                movement: "Surrealism",
                portrait: daliPortrait,
                description: "Salvador Domingo Dalí was a Spanish renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age he became increasingly attracted to Cubism and avant-garde movements. He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. based on his interest in classicism, mysticism, and recent scientific developments. Dalí's artistic repertoire included painting, graphic arts, film, sculpture, design and photography, at times in collaboration with other artists. He also wrote fiction, poetry, autobiography, essays and criticism. Major themes in his work include dreams, the subconscious, sexuality, religion, science and his closest personal relationships.",
                artworks: [
                    {
                        name: "The Persistence of Memory",
                        image: "https://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=4c0635a9ee70d63e",
                        completedIn: "1931",
                        description: "Hard objects become inexplicably limp in this bleak and infinite dreamscape, while metal attracts ants like rotting flesh; Dalí painted “to systematize confusion and thus to help discredit completely the world of reality”"
                    },
                    {
                        name: "Swans Reflecting Elephants",
                        image: "https://www.dalipaintings.com/images/paintings/swans-reflecting-elephants.jpg",
                        completedIn: "1937",
                        description: "From Dali's Paranoiac-critical period, painted using oil on canvas, it contains one of Dali's famous double images. The double images were a major part of Dali's “paranoia-critical method,” which he put forward in his 1935 essay “The Conquest of the Irrational”"
                    },
                    {
                        name: "The Dream Caused by the Flight of a Bee",
                        image: "https://www.museothyssen.org/sites/default/files/imagen/obras/1974.46_sueno-causado-vuelo-abeja-alrededor-granada-segundo-antes-despertar.jpg",
                        completedIn: "1944",
                        description: "Dalí depicts two suspended droplets of water and a pomegranate, a Christian symbol of fertility and resurrection. Above the pomegranate flies a bee, an insect that traditionally symbolizes the Virgin"
                    },
                    {
                        name: "The Burning Giraffe",
                        image: "https://1.bp.blogspot.com/-UMQ8AVTX9Ac/Xb8adWhBk9I/AAAAAAAACHQ/5WW5MZBWIdYYxEi2dxdl7EyKPpK_w--LwCLcBGAsYHQ/s1600/small-the-burning-giraffe-salvador-dali-s-paintings-collection-original-imaf32ve9urgcsw2.jpg",
                        completedIn: "1937",
                        description: "Dali painted Burning Giraffe before his exile in the United States which was from 1940 to 1948. This painting shows his personal struggle with the battle in his home country"
                    },
                    {
                        name: "Soft Construction with Boiled Beans",
                        image: "https://arthistoryproject.com/site/assets/files/20336/salvador_dali-soft_construction_with_boiled_beans-1936-trivium-art-history.jpg",
                        completedIn: "1936",
                        description: "This painting expresses the destruction during the Spanish Civil War. The monstrous creature in this painting is self-destructive just as a Civil War is"
                    }
                ]
            },
            {
                nickname: "Munch",
                fullName: "Edvard Daniel Jon Hans Einar Erling Munch",
                borIn: undefined,
                diedIn: undefined,
                movement: "Expressionism",
                portrait: munchPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Scream",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1200px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
                        completedIn: "1893",
                        description: "Munch recalled that he had been out for a walk at sunset when suddenly the setting sun's light turned the clouds “a blood red”. He sensed an “infinite scream passing through nature”"
                    },
                    {
                        name: "Love and Pain",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg",
                        completedIn: "1893",
                        description: "The painting depicts a man and woman embracing, with the woman appearing to be either kissing or biting the man on his neck"
                    },
                    {
                        name: "Puberty",
                        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-puberty-edvard-munch.jpg",
                        completedIn: "1894",
                        description: "A naked young girl with loose hair is sitting on the edge of a bed, hiding her crotch with her arms. She stares at us with wide-open eyes"
                    },
                    {
                        name: "The Kiss",
                        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg",
                        completedIn: "1987",
                        description: "Munch never married. The dark ambiance of The Kiss is representative of Munch's ambivalence regarding romance. It's virtually impossible to separate the two figures, particularly where their faces meet and become one in the painting"
                    },
                    {
                        name: "Death in the Sickroom",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg",
                        completedIn: "1893",
                        description: "Death in the Sickroom from 1893 goes back to the memory of sister Sophie's death. She died of tuberculosis in 1877. The motif is one of a number of Munch's portrayals of sickness, death and sorrow in the family"
                    }
                ]
            },
            {
                nickname: "Vermeer",
                fullName: "Johannes Vermeer",
                borIn: undefined,
                diedIn: undefined,
                movement: "Baroque",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "Girl with a Pearl Earring",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/865px-1665_Girl_with_a_Pearl_Earring.jpg",
                        completedIn: "1665",
                        description: "It depicts a European girl wearing an exotic dress, an oriental turban, and what appears to be a very large pearl as an earring"
                    },
                    {
                        name: "The Astronomer",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg/1803px-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
                        completedIn: "1668",
                        description: "The astronomer in question is looking at a globe of the heavens, but a number of objects in the room point to Vermeer's focus on religion as well"
                    },
                    {
                        name: "The Milkmaid",
                        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/milkmaid-1660-johannes-vermeer.jpg",
                        completedIn: "1661",
                        description: "The painting shows a milkmaid, a woman who milks cows and makes dairy products like butter and cheese, in a plain room carefully pouring milk into a squat earthenware container on a table"
                    },
                    {
                        name: "The Love Letter",
                        image: "https://www.everypainterpaintshimself.com/article_images_new/The_Love_Letter.c1669-70.oilcan.Rijksmuseum_copy.jpg",
                        completedIn: "1670",
                        description: "The Love Letter (Dutch: De liefdesbrief) is a 17th-century genre painting by Jan Vermeer. The painting shows a servant maid commenting to her mistress on a letter the woman holds"
                    },
                    {
                        name: "View of Delft",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/1200px-Vermeer-view-of-delft.jpg",
                        completedIn: "1663",
                        description: "The landscape was painted from an elevated position to the southeast of Delft, possibly the upper floor of a house on the quayside across the river Schie"
                    }
                ]
            },
            {
                nickname: "Rembrandt",
                fullName: "Rembrandt Harmenszoon van Rijn",
                borIn: "7/15/1606/Países Baixos",
                diedIn: "10/4/1669/Países Baixos",
                movement: "Baroque",
                portrait: rembrandtPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Night Watch",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg/2449px-Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg",
                        completedIn: "1642",
                        description: "The Night Watch is a group portrait of the militia company of Captain Frans Banning Cocq and Lieutenant Willem van Ruytenburgh (in the center)"
                    },
                    {
                        name: "The Anatomy Lesson of Dr. Nicolaes Tulp",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/2560px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
                        completedIn: "1632",
                        description: "The painting depicts the Dutch surgeon and the later mayor of Amsterdam Dr. Nicolaes Tulp holding an anatomy lesson on the corpse of the executed criminal Aris Kindt"
                    },
                    {
                        name: "Self-Portrait with Two Circles",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rembrandt_Self-portrait_%28Kenwood%29.jpg/1200px-Rembrandt_Self-portrait_%28Kenwood%29.jpg",
                        completedIn: "1669",
                        description: "Rembrandt's self-portraits shows the artist at work. He is depicted holding his palette, brushes, and maulstick with two enigmatic circles in the background"
                    },
                    {
                        name: "The Storm on the Sea of Galilee",
                        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
                        completedIn: "1633",
                        description: "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat"
                    },
                    {
                        name: "Danaë",
                        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Rembrandt_Harmensz._van_Rijn_026.jpg",
                        completedIn: "1636",
                        description: "It depicts Danaë, the mother of the ancient Greek mythological hero Perseus. The life-sized depiction of Danaë is thought to show her welcoming Zeus who came to her in the form of golden rain"
                    }
                ]
            },
            {
                nickname: "Monet",
                fullName: "Oscar-Claude Monet",
                borIn: "11/14/1840/França",
                diedIn: "12/5/1926/França",
                movement: "Naturalism",
                portrait: monetPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "Woman with Parasol",
                        image: "https://media.nga.gov/iiif/99758d9d-c10b-4d02-a198-7e49afb1f3a6/full/!588,600/0/default.jpg",
                        completedIn: "1875",
                        description: "In the painting, Mrs Monet's veil is blown by the wind, as is her billowing white dress. Monet's seven-year-old son, is placed further away"
                    },
                    {
                        name: "La Grenouillère",
                        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/La_Grenouill%C3%A8re_MET_DT833.jpg",
                        completedIn: "1869",
                        description: "La Grenouillère was a popular resort with a spa, boating facilities and a floating café. Young Renoir and Monet went together on a painting trip to La Grenouillère, the two artists set up their easels outdoors and painted en-plein air"
                    },
                    {
                        name: "Nymphéas",
                        image: "https://images.prismic.io/barnebys/37d91e82-c30e-4850-b47d-8d22b4924249_Claude+Monet+%281840-1926%29_+Le+Bassin+aux+nymph%C3%A9as%2C+1917-1919%2C+huile+sur+toile%2C+100+x+200+cm.+Photo+%C2%A9+Sotheby%27s.jpg?auto=compress,format",
                        completedIn: "1926",
                        description: "Monet painted a series of waterlilies, they are scattered all over the world and are recognized as his most famous paintings"
                    },
                    {
                        name: "The Saint-Lazare Station",
                        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Claude_Monet_-_The_Saint-Lazare_Station_-_Google_Art_Project.jpg",
                        completedIn: "1877",
                        description: "Trains were now a new form of public transport. For Monet, this train station represented modern progress and the massive industrialization that was springing up all over the country"
                    },
                    {
                        name: "Haystack at the End of Summer",
                        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Claude_Monet_- _Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
                        completedIn: "1891",
                        description: "In 1890 and 1891, Claude Monet painted another series of twenty-five canvases depicting Haystacks. These paintings capture haystacks after the harvest season from the surrounding farming fields in Giverny"
                    }
                ]
            },
            {
                nickname: "Caravaggio",
                fullName: "Michelangelo \"Caravaggio\" Merisi",
                borIn: "9/29/1571/Itália",
                diedIn: "7/18/1610/Itália",
                movement: "Baroque",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "The Incredulity of Saint Thomas",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_Incredulity_of_Saint_Thomas-Caravaggio_%281601-2%29.jpg/1280px-The_Incredulity_of_Saint_Thomas-Caravaggio_%281601-2%29.jpg",
                        completedIn: "1602",
                        description: "One of the apostles of Christ, Thomas doubted his ressurection, saying he would not believe it until he could place his finger where the nails had pierced his crucified body"
                    },
                    {
                        name: "The Beheading of Saint John the Baptist",
                        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/La_decapitaci%C3%B3n_de_San_Juan_Bautista%2C_por_Caravaggio.jpg",
                        completedIn: "1608",
                        description: "The oil depicts the execution of John the Baptist and is the only work that Caravaggio ever signed. His signature, located in the blood that spills from John's throat, was discovered during restoration of the work"
                    },
                    {
                        name: "The Calling of Saint Matthew",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1200px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
                        completedIn: "1600",
                        description: "The painting shows the very moment in which Jesus inspired Matthew to follow him. Standing alongside Saint Peter, Jesus points at Matthew, who is sitting at a table with four other men"
                    },
                    {
                        name: "David with the Head of Goliath",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Narcissus-Caravaggio_%281594-96%29_edited.jpg/1200px-Narcissus-Caravaggio_%281594-96%29_edited.jpg",
                        completedIn: "1610",
                        description: "David is depicted not celebrating his victory over the giant, but rather lost in thought, perhaps pondering his curious biblical connection and bond with his adversary"
                    },
                    {
                        name: "Narcissus",
                        image: "http://totallyhistory.com/wp-content/uploads/2012/09/Michelangelo_Caravaggio.jpg",
                        completedIn: "1599",
                        description: "Caravaggio painted an adolescent page wearing an elegant brocade doublet, leaning with both hands over the water, as he gazes at this own distorted reflection. The figure of Narcissus is locked in a circle with his reflection, surrounded by darkness, so that the only reality is inside this self-regarding loop"
                    }
                ]
            },
            {
                nickname: "Paul Rubens",
                fullName: "Peter Paul Rubens",
                borIn: "6/28/1577/Alemanha",
                diedIn: "5/30/1640/Bélgica",
                movement: "Baroque",
                portrait: paulRubensPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Massacre of the Innocents",
                        image: massacreOfTheInnocents,
                        completedIn: "1610",
                        description: "Depicts the biblical tale of Roman soldiers executing male newborns in Bethlehem on the orders of King Herod"
                    },
                    {
                        name: "Prometheus Bound",
                        image: prometheusBound,
                        completedIn: "1612",
                        description: "With hooked beak, a monstrous vulture digs about in the liver of Prometheus, who is given no peace from his torments as ever and again the savage bird draws near his self-renewing breast and attacks it punishingly"
                    },
                    {
                        name: "The Descent from the Cross",
                        image: descentFromTheCross,
                        completedIn: "1612",
                        description: "Depicts Christ's lifeless body being taken down from the cross by a group of people, among them the Virgin Mary, John the Apostle cloaked in red and Mary Magdalene, described by the cathedral as “a paragon of Baroque art”"
                    },
                    {
                        name: "The Judgement of Paris",
                        image: theJudgmentOfParis,
                        completedIn: "1636",
                        description: "Depicts the mythic Roman tale of the same name in which Paris was forced to judge the most beautiful of three goddesses — Venus, Minerva and Juno — in events that ignited the Trojan War"
                    },
                    {
                        name: "The Hippopotamus and Crocodile Hunt",
                        image: theHippopotamusAndCrocodileHunt,
                        completedIn: "1616",
                        description: "Commissioned by Maximilian I, Elector of Bavaria to adorn his summer residence, the Schleissheim Palace — is just one of these hunting pieces and today resides at Munich's Alte Pinokothek."
                    }
                ]
            }
        ],
        en: [
            {
                nickname: "Van Gogh",
                fullName: "Vincent Willem van Gogh",
                borIn: "3/30/1853/Netherlands",
                diedIn: "7/29/1890/France",
                movement: "Post-Impressionism",
                portrait: vanGoghPortrait,
                description: "Vincent Willem van Gogh was a Dutch Post-Impressionist artist who emerged as one of the most famous figures in the history of Western art after his death. Van Gogh's landscapes, still lifes, portraits, and self-portraits are characterized by vibrant contrasts of complementary colors, expressive brushwork, and abstract, linear planes inspired by the Japanese prints he collected and admired. His innovations contributed to the foundations of modern art. Van Gogh's images often reflect personal symbolism, experiences, and emotions he discussed in correspondence with family and friends. He expressed a desire to communicate joy and comfort through his art and aspired to gather a community of like-minded artists in southern France. Van Gogh did not achieve commercial success in his lifetime and relied on financial support from his brother, Theo van Gogh. His life was shaped by severe depression and episodes of acute psychological distress. Van Gogh committed suicide at the age of 37",
                artworks: [
                    {
                        name: "Starry Night",
                        image: "https://www.moma.org/media/W1siZiIsIjQ2NzUxNyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=314ebf8cc678676f",
                        completedIn: "1889",
                        description: "Van Gogh created this painting after a major mental breakdown and felt depressed and suicidal. The swirls in the sky reflect his emotional turbulence. The scene of this painting depicts the views of Saint-Rémy-de-Provence that Van Gogh saw from his bedroom window"
                    },
                    {
                        name: "Cafe Terrace at Night",
                        image: cafeTerraceAtNight,
                        completedIn: "1888",
                        description: "Van Gogh set up his easel outdoors and in the evening hours to paint this scene. This was a practice that he picked up from the impressionists in Paris. However, he did not paint the scene as he observed it but rather used color and brushwork to express his emotions. In this painting, Van Gogh portrays excitement and pleasure"
                    },
                    {
                        name: "Sunflowers",
                        image: twoCutSunflowers,
                        completedIn: "1888",
                        description: "Van Gogh wanted to decorate his guest's bedroom (Paul Gauguin) as he was joining Willem in Arles so that they could paint together"
                    },
                    {
                        name: "The Bedroom",
                        image: bedroomInArles,
                        completedIn: "1888",
                        description: "While he was in Arles, Van Gogh made this painting of his bedroom in the Yellow House. He prepared the room himself with simple furniture and with his own work on the wall"
                    },
                    {
                        name: "Almond Blossom",
                        image: almondBlossom,
                        completedIn: "1890",
                        description: "Large blossom branches against a blue sky. Almond trees flower early in the spring making them a symbol of new life"
                    }
                ]
            },
            {
                nickname: "Picasso",
                fullName: "Pablo Diego José Francisco de Paula Juan Nepomuceno Crispín Crispiniano María Remedios de la Santísima Trinidad Ruiz Picasso",
                borIn: "10/25/1881/Spain",
                diedIn: "4/8/1973/France",
                movement: "Cubism",
                portrait: picassoPortrait,
                description: "One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Picasso's work is often categorized into periods. While the names of many of his later periods are debated, the most commonly accepted periods in his work are the Blue Period, the Rose Period, the African-influenced Period, Analytic Cubism, and Synthetic Cubism, also referred to as the Crystal period",
                artworks: [
                    {
                        name: "Guernica",
                        image: guernica,
                        completedIn: "1937",
                        description: "Picasso said very little about the painting's meaning, leaving interpretation to viewers, critics, and art historians. Although clear as an emotional response to war's senseless violence"
                    },
                    {
                        name: "The Old Guitarist",
                        image: vieuxGuitaristeAveugle,
                        completedIn: "1904",
                        description: "The painting reﬂects the twenty-two-year-old Picasso's personal struggle and sympathy for the plight of the downtrodden"
                    },
                    {
                        name: "Les Demoiselles D'Avignon",
                        image: lesDemoisellesDAvingon,
                        completedIn: "1907",
                        description: "It depicts five naked women composed of flat, splintered planes whose faces were inspired by Iberian sculpture and African masks"
                    },
                    {
                        name: "Gertrude Stein",
                        image: gertrudeStein,
                        completedIn: "1906",
                        description: "An portrait of the famous writer and expatriate Gertrude Stein"
                    },
                    {
                        name: "Garçon à la Pipe",
                        image: garconALaPipe,
                        completedIn: "1905",
                        description: "The painting depicts an boy wearing a headpiece of flowers, holding a pipe, with more flowers appearing in the background"
                    }
                ]
            },
            {
                nickname: "Gustave Dore",
                fullName: "Paul-Gustave Doré",
                borIn: "1/6/1832/France",
                diedIn: "1/23/1883/France",
                movement: "Romantism",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "La Siesta",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gustave_Dore_-_La_Siesta%2C_Memory_of_Spain_-_Google_Art_Project.jpg/1200px-Gustave_Dore_-_La_Siesta%2C_Memory_of_Spain_-_Google_Art_Project.jpg",
                        completedIn: "1868",
                        description: undefined
                    },
                    {
                        name: "The Enigma",
                        image: "https://i.pinimg.com/originals/22/3a/05/223a05e867dc521bc250a8a4d2f897d0.jpg",
                        completedIn: "1871",
                        description: "The Enigma features a scene of carnage, as a city burns and bodies are strewn right across the composition. This artwork followed on soon after France's defeat to Prussia a year earlier"
                    },
                    {
                        name: "Dante and Virgil in the Ninth Circle of Hell",
                        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Gustave_Dor%C3%A9_-_Dante_et_Virgile_dans_le_neuvi%C3%A8me_cercle_de_l%27Enfer.jpg",
                        completedIn: "1861",
                        description: "In Dante's 'Inferno,' Dante himself is led through the nine circles of hell by the ancient poet Virgil, finally arriving at the ninth circle where those who hate the idea of love reside, including Satan himself. Since love brings warmth and comfort. They claw and bite at one another and writhe in pain"
                    },
                    {
                        name: "Oceanides",
                        image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Les_Oceanides_Les_Naiades_de_la_mer.jpg",
                        completedIn: "1869",
                        description: "Based on the ancient Greek tragedy Prometheus Bound, the painting depicts a group of nymphs at a rock in the ocean. In the background, the Titan Prometheus is chained to a cliff, a punishment given to him by Zeus after he stole fire from the gods and gave it to mankind"
                    },
                    {
                        name: "Alpine Scene",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Gustave_Dor%C3%A9_-_Alpine_Scene_-_1967.588_-_Art_Institute_of_Chicago.jpg/1200px-Gustave_Dor%C3%A9_-_Alpine_Scene_-_1967.588_-_Art_Institute_of_Chicago.jpg",
                        completedIn: "1865",
                        description: undefined
                    }
                ]
            },
            {
                nickname: "Dalí",
                fullName: "Salvador Domingo Felipe Jacinto Dalí i Domènech",
                borIn: "5/11/1904/Spain",
                diedIn: "1/23/1989/Spain",
                movement: "Surrealism",
                portrait: daliPortrait,
                description: "Salvador Domingo Dalí was a Spanish renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age he became increasingly attracted to Cubism and avant-garde movements. He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. based on his interest in classicism, mysticism, and recent scientific developments. Dalí's artistic repertoire included painting, graphic arts, film, sculpture, design and photography, at times in collaboration with other artists. He also wrote fiction, poetry, autobiography, essays and criticism. Major themes in his work include dreams, the subconscious, sexuality, religion, science and his closest personal relationships.",
                artworks: [
                    {
                        name: "The Persistence of Memory",
                        image: "https://www.moma.org/media/W1siZiIsIjM4NjQ3MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTQ0MFx1MDAzZSJdXQ.jpg?sha=4c0635a9ee70d63e",
                        completedIn: "1931",
                        description: "Hard objects become inexplicably limp in this bleak and infinite dreamscape, while metal attracts ants like rotting flesh; Dalí painted “to systematize confusion and thus to help discredit completely the world of reality”"
                    },
                    {
                        name: "Swans Reflecting Elephants",
                        image: "https://www.dalipaintings.com/images/paintings/swans-reflecting-elephants.jpg",
                        completedIn: "1937",
                        description: "From Dali's Paranoiac-critical period, painted using oil on canvas, it contains one of Dali's famous double images. The double images were a major part of Dali's “paranoia-critical method,” which he put forward in his 1935 essay “The Conquest of the Irrational”"
                    },
                    {
                        name: "The Dream Caused by the Flight of a Bee",
                        image: "https://www.museothyssen.org/sites/default/files/imagen/obras/1974.46_sueno-causado-vuelo-abeja-alrededor-granada-segundo-antes-despertar.jpg",
                        completedIn: "1944",
                        description: "Dalí depicts two suspended droplets of water and a pomegranate, a Christian symbol of fertility and resurrection. Above the pomegranate flies a bee, an insect that traditionally symbolizes the Virgin"
                    },
                    {
                        name: "The Burning Giraffe",
                        image: "https://1.bp.blogspot.com/-UMQ8AVTX9Ac/Xb8adWhBk9I/AAAAAAAACHQ/5WW5MZBWIdYYxEi2dxdl7EyKPpK_w--LwCLcBGAsYHQ/s1600/small-the-burning-giraffe-salvador-dali-s-paintings-collection-original-imaf32ve9urgcsw2.jpg",
                        completedIn: "1937",
                        description: "Dali painted Burning Giraffe before his exile in the United States which was from 1940 to 1948. This painting shows his personal struggle with the battle in his home country"
                    },
                    {
                        name: "Soft Construction with Boiled Beans",
                        image: "https://arthistoryproject.com/site/assets/files/20336/salvador_dali-soft_construction_with_boiled_beans-1936-trivium-art-history.jpg",
                        completedIn: "1936",
                        description: "This painting expresses the destruction during the Spanish Civil War. The monstrous creature in this painting is self-destructive just as a Civil War is"
                    }
                ]
            },
            {
                nickname: "Munch",
                fullName: "Edvard Daniel Jon Hans Einar Erling Munch",
                borIn: undefined,
                diedIn: undefined,
                movement: "Expressionism",
                portrait: munchPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Scream",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1200px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
                        completedIn: "1893",
                        description: "Munch recalled that he had been out for a walk at sunset when suddenly the setting sun's light turned the clouds “a blood red”. He sensed an “infinite scream passing through nature”"
                    },
                    {
                        name: "Love and Pain",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg",
                        completedIn: "1893",
                        description: "The painting depicts a man and woman embracing, with the woman appearing to be either kissing or biting the man on his neck"
                    },
                    {
                        name: "Puberty",
                        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-puberty-edvard-munch.jpg",
                        completedIn: "1894",
                        description: "A naked young girl with loose hair is sitting on the edge of a bed, hiding her crotch with her arms. She stares at us with wide-open eyes"
                    },
                    {
                        name: "The Kiss",
                        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Edvard_Munch_-_The_Kiss_-_Google_Art_Project.jpg",
                        completedIn: "1987",
                        description: "Munch never married. The dark ambiance of The Kiss is representative of Munch's ambivalence regarding romance. It's virtually impossible to separate the two figures, particularly where their faces meet and become one in the painting"
                    },
                    {
                        name: "Death in the Sickroom",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_Death_in_the_Sickroom_-_Google_Art_Project.jpg",
                        completedIn: "1893",
                        description: "Death in the Sickroom from 1893 goes back to the memory of sister Sophie's death. She died of tuberculosis in 1877. The motif is one of a number of Munch's portrayals of sickness, death and sorrow in the family"
                    }
                ]
            },
            {
                nickname: "Vermeer",
                fullName: "Johannes Vermeer",
                borIn: undefined,
                diedIn: undefined,
                movement: "Baroque",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "Girl with a Pearl Earring",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/865px-1665_Girl_with_a_Pearl_Earring.jpg",
                        completedIn: "1665",
                        description: "It depicts a European girl wearing an exotic dress, an oriental turban, and what appears to be a very large pearl as an earring"
                    },
                    {
                        name: "The Astronomer",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg/1803px-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
                        completedIn: "1668",
                        description: "The astronomer in question is looking at a globe of the heavens, but a number of objects in the room point to Vermeer's focus on religion as well"
                    },
                    {
                        name: "The Milkmaid",
                        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/milkmaid-1660-johannes-vermeer.jpg",
                        completedIn: "1661",
                        description: "The painting shows a milkmaid, a woman who milks cows and makes dairy products like butter and cheese, in a plain room carefully pouring milk into a squat earthenware container on a table"
                    },
                    {
                        name: "The Love Letter",
                        image: "https://www.everypainterpaintshimself.com/article_images_new/The_Love_Letter.c1669-70.oilcan.Rijksmuseum_copy.jpg",
                        completedIn: "1670",
                        description: "The Love Letter (Dutch: De liefdesbrief) is a 17th-century genre painting by Jan Vermeer. The painting shows a servant maid commenting to her mistress on a letter the woman holds"
                    },
                    {
                        name: "View of Delft",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/1200px-Vermeer-view-of-delft.jpg",
                        completedIn: "1663",
                        description: "The landscape was painted from an elevated position to the southeast of Delft, possibly the upper floor of a house on the quayside across the river Schie"
                    }
                ]
            },
            {
                nickname: "Rembrandt",
                fullName: "Rembrandt Harmenszoon van Rijn",
                borIn: "7/15/1606/Netherlands",
                diedIn: "10/4/1669/Netherlands",
                movement: "Baroque",
                portrait: rembrandtPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Night Watch",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg/2449px-Rembrandt_van_Rijn-De_Nachtwacht-1642.jpg",
                        completedIn: "1642",
                        description: "The Night Watch is a group portrait of the militia company of Captain Frans Banning Cocq and Lieutenant Willem van Ruytenburgh (in the center)"
                    },
                    {
                        name: "The Anatomy Lesson of Dr. Nicolaes Tulp",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/2560px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
                        completedIn: "1632",
                        description: "The painting depicts the Dutch surgeon and the later mayor of Amsterdam Dr. Nicolaes Tulp holding an anatomy lesson on the corpse of the executed criminal Aris Kindt"
                    },
                    {
                        name: "Self-Portrait with Two Circles",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Rembrandt_Self-portrait_%28Kenwood%29.jpg/1200px-Rembrandt_Self-portrait_%28Kenwood%29.jpg",
                        completedIn: "1669",
                        description: "Rembrandt's self-portraits shows the artist at work. He is depicted holding his palette, brushes, and maulstick with two enigmatic circles in the background"
                    },
                    {
                        name: "The Storm on the Sea of Galilee",
                        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
                        completedIn: "1633",
                        description: "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat"
                    },
                    {
                        name: "Danaë",
                        image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Rembrandt_Harmensz._van_Rijn_026.jpg",
                        completedIn: "1636",
                        description: "It depicts Danaë, the mother of the ancient Greek mythological hero Perseus. The life-sized depiction of Danaë is thought to show her welcoming Zeus who came to her in the form of golden rain"
                    }
                ]
            },
            {
                nickname: "Monet",
                fullName: "Oscar-Claude Monet",
                borIn: "11/14/1840/France",
                diedIn: "12/5/1926/France",
                movement: "Naturalism",
                portrait: monetPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "Woman with Parasol",
                        image: "https://media.nga.gov/iiif/99758d9d-c10b-4d02-a198-7e49afb1f3a6/full/!588,600/0/default.jpg",
                        completedIn: "1875",
                        description: "In the painting, Mrs Monet's veil is blown by the wind, as is her billowing white dress. Monet's seven-year-old son, is placed further away"
                    },
                    {
                        name: "La Grenouillère",
                        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/La_Grenouill%C3%A8re_MET_DT833.jpg",
                        completedIn: "1869",
                        description: "La Grenouillère was a popular resort with a spa, boating facilities and a floating café. Young Renoir and Monet went together on a painting trip to La Grenouillère, the two artists set up their easels outdoors and painted en-plein air"
                    },
                    {
                        name: "Nymphéas",
                        image: "https://images.prismic.io/barnebys/37d91e82-c30e-4850-b47d-8d22b4924249_Claude+Monet+%281840-1926%29_+Le+Bassin+aux+nymph%C3%A9as%2C+1917-1919%2C+huile+sur+toile%2C+100+x+200+cm.+Photo+%C2%A9+Sotheby%27s.jpg?auto=compress,format",
                        completedIn: "1926",
                        description: "Monet painted a series of waterlilies, they are scattered all over the world and are recognized as his most famous paintings"
                    },
                    {
                        name: "The Saint-Lazare Station",
                        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Claude_Monet_-_The_Saint-Lazare_Station_-_Google_Art_Project.jpg",
                        completedIn: "1877",
                        description: "Trains were now a new form of public transport. For Monet, this train station represented modern progress and the massive industrialization that was springing up all over the country"
                    },
                    {
                        name: "Haystack at the End of Summer",
                        image: "https://upload.wikimedia.org/wikipedia/commons/6/68/Claude_Monet_- _Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
                        completedIn: "1891",
                        description: "In 1890 and 1891, Claude Monet painted another series of twenty-five canvases depicting Haystacks. These paintings capture haystacks after the harvest season from the surrounding farming fields in Giverny"
                    }
                ]
            },
            {
                nickname: "Caravaggio",
                fullName: "Michelangelo \"Caravaggio\" Merisi",
                borIn: "9/29/1571/Italy",
                diedIn: "7/18/1610/Italy",
                movement: "Baroque",
                portrait: undefined,
                description: undefined,
                artworks: [
                    {
                        name: "The Incredulity of Saint Thomas",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_Incredulity_of_Saint_Thomas-Caravaggio_%281601-2%29.jpg/1280px-The_Incredulity_of_Saint_Thomas-Caravaggio_%281601-2%29.jpg",
                        completedIn: "1602",
                        description: "One of the apostles of Christ, Thomas doubted his ressurection, saying he would not believe it until he could place his finger where the nails had pierced his crucified body"
                    },
                    {
                        name: "The Beheading of Saint John the Baptist",
                        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/La_decapitaci%C3%B3n_de_San_Juan_Bautista%2C_por_Caravaggio.jpg",
                        completedIn: "1608",
                        description: "The oil depicts the execution of John the Baptist and is the only work that Caravaggio ever signed. His signature, located in the blood that spills from John's throat, was discovered during restoration of the work"
                    },
                    {
                        name: "The Calling of Saint Matthew",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg/1200px-The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg",
                        completedIn: "1600",
                        description: "The painting shows the very moment in which Jesus inspired Matthew to follow him. Standing alongside Saint Peter, Jesus points at Matthew, who is sitting at a table with four other men"
                    },
                    {
                        name: "David with the Head of Goliath",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Narcissus-Caravaggio_%281594-96%29_edited.jpg/1200px-Narcissus-Caravaggio_%281594-96%29_edited.jpg",
                        completedIn: "1610",
                        description: "David is depicted not celebrating his victory over the giant, but rather lost in thought, perhaps pondering his curious biblical connection and bond with his adversary"
                    },
                    {
                        name: "Narcissus",
                        image: "http://totallyhistory.com/wp-content/uploads/2012/09/Michelangelo_Caravaggio.jpg",
                        completedIn: "1599",
                        description: "Caravaggio painted an adolescent page wearing an elegant brocade doublet, leaning with both hands over the water, as he gazes at this own distorted reflection. The figure of Narcissus is locked in a circle with his reflection, surrounded by darkness, so that the only reality is inside this self-regarding loop"
                    }
                ]
            },
            {
                nickname: "Paul Rubens",
                fullName: "Peter Paul Rubens",
                borIn: "6/28/1577/Germany",
                diedIn: "5/30/1640/Belgium",
                movement: "Baroque",
                portrait: paulRubensPortrait,
                description: undefined,
                artworks: [
                    {
                        name: "The Massacre of the Innocents",
                        image: massacreOfTheInnocents,
                        completedIn: "1610",
                        description: "Depicts the biblical tale of Roman soldiers executing male newborns in Bethlehem on the orders of King Herod"
                    },
                    {
                        name: "Prometheus Bound",
                        image: prometheusBound,
                        completedIn: "1612",
                        description: "With hooked beak, a monstrous vulture digs about in the liver of Prometheus, who is given no peace from his torments as ever and again the savage bird draws near his self-renewing breast and attacks it punishingly"
                    },
                    {
                        name: "The Descent from the Cross",
                        image: descentFromTheCross,
                        completedIn: "1612",
                        description: "Depicts Christ's lifeless body being taken down from the cross by a group of people, among them the Virgin Mary, John the Apostle cloaked in red and Mary Magdalene, described by the cathedral as “a paragon of Baroque art”"
                    },
                    {
                        name: "The Judgement of Paris",
                        image: theJudgmentOfParis,
                        completedIn: "1636",
                        description: "Depicts the mythic Roman tale of the same name in which Paris was forced to judge the most beautiful of three goddesses — Venus, Minerva and Juno — in events that ignited the Trojan War"
                    },
                    {
                        name: "The Hippopotamus and Crocodile Hunt",
                        image: theHippopotamusAndCrocodileHunt,
                        completedIn: "1616",
                        description: "Commissioned by Maximilian I, Elector of Bavaria to adorn his summer residence, the Schleissheim Palace — is just one of these hunting pieces and today resides at Munich's Alte Pinokothek."
                    }
                ]
            }
        ]
    }
}


export default data
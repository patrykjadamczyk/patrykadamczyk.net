/**
 * Language Configuration
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
// export default {
//     languages: true,
//     baseLang: "pl",
//     langs: [
//         "pl",
//         "en",
//         "de"
//     ]
// };

class languages
{
    languages = false;
    /**
     * @todo Make it as cookie too or something in storage. No matter
     */
    baseLang =  "pl";
    langs =  [
        "pl",
        "en"
    ];
    constructor()
    {
    }
}
export default (new languages());

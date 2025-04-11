import { Scene } from "../models/Types";

const scenes: Scene[] = [{
    id: 'intro',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Welcome adventuror! Let\'s go find the sunken ship, shall we?',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Once you found the sunken ship, you will return to my ship.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'You can set sail while using the arrow-key of your keyboard.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'We will keep contact through the radio.',
            duration: 2500
        }
    ]
},{
    id: 'upgrades',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Careful now, you submarine isn\'t equipped enough yet to go for such deep dives.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Visit me to order upgrades.',
            duration: 2500
        }
    ]
},{
    id: 'earning',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Quite expensive those upgrades, eh?',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Perhaps you can catch some fish or dive up some sunken treasure.',
            duration: 2500
        }
    ]
},{
    id: 'deeper',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'You seem to go back and forth in the same trench.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'A beacon will help you light up the area and give you an idea where you are.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Visit me to order some.',
            duration: 2500
        }
    ]
},{
    id: 'tooDeep',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Oh we might lose contact, if you go this deep.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'I forgot ... kchhrr ... , you .. kchrr ...',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'The ... Krchhrr ... rumors ... krrchh ... strange sightings.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Something ... krrrshch ... seamonster ... krshhchh ... ',
            duration: 2500
        }
    ]
},{
    id: 'backFromTheDeep',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Glad you made it out.',
            duration: 2500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Found the sunken ship already?',
            duration: 2500
        }
    ]
},{
    id: 'treasureRetrieving',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'You got it?! I can\'t wait to open it',
            duration: 2500
        }
    ]
},{
    id: 'treasureRetrieved',
    events: [
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Wonderful! That\'s more then we could have hoped for!',
            duration: 3000
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'Thank you very much!',
            duration: 3500
        },
        {
            type: 'dialog',
            actor: 'captain',
            text: 'You like to come on another treasure dive with me soon?',
            duration: 4000
        },
        {
            type: 'credits'
        }
    ]
}];

export default scenes;
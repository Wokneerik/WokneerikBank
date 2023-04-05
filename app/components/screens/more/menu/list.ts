import { IMoreItem } from "./types";

const startURL = 'https://privatbank.ua'

export const menu:IMoreItem[] = [
    {
        title: 'ATM machines',
        description: 'Search for Vokneerik Bank ATMs and other banks on the map',
        iconName: 'account-balance',
        link: `${startURL}/map`,
    },
    {
        title: 'Top-up points',
        description: 'Cash replenisment in hryvnias, dollars, euros',
        iconName: 'credit-card',
        link: `${startURL}/hotivka-na-kasi`,
    },
    {
        title: 'Ordering certificates',
        description: 'Account statements by e-mail in paper form',
        iconName: 'find-in-page',
        link: `${startURL}/platezhnie-karty`,
    },
    {
        title: 'For business',
        description: 'Online banking for small bussinesses',
        iconName: 'business',
        link: `${startURL}/business`,
    },
    {
        title: 'Communication',
        description: 'By e-mail and in social networks, call via the Internet and by phone',
        iconName: 'chat-bubble',
        link: `${startURL}/about/contacts`,
    },
    
]
import {error} from '@sveltejs/kit'

/**
 * * Teams List
 */

export async function load ({ fetch, params }) {
    const res = await fetch (
        `https://statsapi.web.nhl.com/api/v1/teams/${params.slug}/roster`
    )
    const data = await res.json()
    const teams = data 
    // console.log(teams);
    if (res.ok) {
        return teams
    } else {
        throw error
    }
}
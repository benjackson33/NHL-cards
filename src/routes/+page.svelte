<script>
import Card from "../components/PlayerCard.svelte";
import TeamCard from "../components/TeamCard.svelte";
export let data
const teams = data.teams
import {nhlTeamImages} from '$lib/team-img-obj.js'
// import {img} from '$lib/team-img-obj.js'

</script>


<section>

<TeamCard 
{teams}
{nhlTeamImages}

/>
</section>

<style>
  

</style>


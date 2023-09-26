<script>
  export let teams;
  export let nhlTeamImages;

  const teamNames = () => {
    const teamData = [];

    teams.forEach((team) => {
      const teamName = team.name;
      const teamKey = teamName.replace(/\s/g, ""); // Remove spaces and generate the key
      const teamImg = nhlTeamImages[teamKey]; // Corrected access to team image URL

      if (teamImg) {
        
        teamData.push({
          id: team.id,
          name: teamName,
          key: teamKey,
          image: teamImg,
        });
      }
    });

    
    return teamData;
    
  };

  const teamData = teamNames();
  // console.log(teamData[0]);
</script>

<div class="nhl-container">
  <img src={nhlTeamImages.NHLLeagueLogo} alt="nhl-logo" />
</div>

<div class="team-card">
  {#each teamData as team}
    <a href={`/teams/${team.id}`}>
      <img src={team.image} alt={team.name} />
    </a>
  {/each}
</div>

<style>
  .nhl-container {
    display: flex;
    justify-content: center;
  }
  .nhl-container > img {
    height: 200px;
    margin-bottom: 50px;
  }
  .team-card {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    height: 100px;
  }

  a > img {
    height: 80px;
    width: auto; /* Keep the aspect ratio */
  }
</style>



export default function handler(req, res) {
  fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
  )
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json(data); 
    })
    .catch((error) => {
      res.status(500).json({ error: "Error al obtener datos" });
    });
}

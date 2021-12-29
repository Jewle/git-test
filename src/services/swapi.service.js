import {HTTPService} from "./HTTP.Service";
import {SWAPI} from "../constants/url.container";


export default class SwapiService extends HTTPService{
    constructor(){
        super(SWAPI)
    }


   getAllPeople = async ()=>{
        const rawPeople = (await this.get(`/people/`)).results
        return rawPeople.map(this._transformPerson)
    }
    getPerson = async (id)=>{
        const rawPerson = await this.get(`/people/${id}`)
        return this._transformPerson(rawPerson)
    }

    getAllPlanets = async ()=>{
        const rawPlanets = (await this.get(`/planets/`)).results
        return rawPlanets.map(this._transformPlanet)
    }

    getPlanet = async (id)=>{
        const rawPlanet = await this.get(`/planets/${id}`)
        return this._transformPlanet(rawPlanet)
    }

    getAllStarShips = async ()=>{
        const rawStarShips = (await this.get(`/starships/`)).results
        return rawStarShips.map(this._transformStarShip)
    }
     getAllStarShip = async (id)=>{
        const rawStarShip = await this.get(`/starships/${id}`)
        return this._transformStarShip(rawStarShip)
    }
    getPersonImage =  (id)=>{
        return  `https://starwars-visualguide.com/assets/img/characters/${id||1}.jpg`
    }
    getStarShipImage = (id)=>{
        return `https://starwars-visualguide.com/assets/img/starships/${id || 5}.jpg`
    }
    _extractId(url){
        const rgxp = /\/([0-9]*)\/$/
        return url.match(rgxp)[1]

    }
    _transformPlanet = (planet)=>{
        const transformedPlanet = {
            name:planet.name,
            id:this._extractId(planet.url),
            population:planet.population,
            diameter:planet.diameter,
            rotationPeriod: planet.rotation_period
        }
        return transformedPlanet
    }
    _transformStarShip = (starShip)=>{
        return {
            id:this._extractId(starShip.url),
            model:starShip.model,
            manufacturer:starShip.manufacturer,
            costInCredits:starShip.costInCredits,
            length:starShip.length,
            crew:starShip.crew,
            passengers:starShip.passengers,
            cargoCapacity:starShip.cargoCapacity
        }
    }
    _transformPerson = (person)=>{
        return {
            id:this._extractId(person.url),
            name:person.name,
            gender:person.gender,
            birthYear:person.birth_year,
            eyeColor:person.eye_color
        }
    }





}

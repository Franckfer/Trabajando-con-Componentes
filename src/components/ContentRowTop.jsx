import React from 'react';
import imageMandalorian from "../assets/images/mandalorian.jpg"
//Components
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from './GenresInDb';


//Data
let cards = [
    {
        "key": 1,
        "title": "Movies in Data Base",
        "length": 21,
        "color": "card border-left-primary shadow h-100 py-2",
        "icon": "fas fa-film fa-2x text-gray-300"
    },
    {
        "key": 2,
        "title": "Total awards",
        "length": 79,
        "color": "card border-left-success shadow h-100 py-2",
        "icon": "fas fa-award fa-2x text-gray-300"
    },
    {
        "key": 3,
        "title": "Actors quantity",
        "length": 21,
        "color": "card border-left-warning shadow h-100 py-2",
        "icon": "fas fa-user fa-2x text-gray-300"
    }
]

let genres = [
    "Acción",
    "Animación",
    "Aventura",
    "Ciencia Ficción",
    "Comedia",
    "Documental",
    "Drama",
    "Fantasía",
    "Infantiles",
    "Musical"
]

let descriptionCard = [
    {
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?",
        "image": "../assets/images/mandalorian.jpg"
    }
]

function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<div className="row">
						<ContentRowMovies
								items = {cards}
						/>
				</div>
				{/*<!-- End movies in Data Base -->*/}


				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastMovieInDb 
						item = {descriptionCard}
						image ={imageMandalorian}
					/>
					{/*<!-- End content row last movie in Data Base -->*/}

					{/*<!-- Genres in DB -->*/}
					<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
							</div>
							<div className="card-body">
								<div className="row">
										<GenresInDb 
											items = {genres}
										/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;
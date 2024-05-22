// Card.js 
//working of individual cards like the ability to toggle or flip and there design 
//is carried out in this file 
function Card({ item, handleSelectedCards, toggled, stopflip }) { 
	return ( 
		<div className="item"> 
			<div className={toggled ? "toggled" : ""}> 
				<img className="face" src={item.img} alt="face" /> 
				<div 
					className="back"
					onClick={() => !stopflip && handleSelectedCards(item)} 
				> 
					{" "} 
				</div> 
			</div> 
		</div> 
	); 
} 

export default Card; 

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const datos = new FormData(form);

  for (const [key, value] of datos.entries()) {
    localStorage.setItem(key, value);
  }

  form.reset();
  mostrarDatos();
});

document.getElementById('nav1').onclick = function(e){
  document.getElementById("panel_datos").style.display = "block";
  document.getElementById("panel_form").style.display = "none";
}

document.getElementById('nav2').onclick = function(e){
  document.getElementById("panel_datos").style.display = "none";
  document.getElementById("panel_form").style.display = "block";
}

document.getElementById('nav3').onclick = function(e){
  localStorage.clear();
  form.reset();
  mostrarDatos();
}

function mostrarDatos() {
	
  const divDatos = document.querySelector('#datos');
  divDatos.innerHTML = '';	
	
  var form_array = ["nombre", "fecha_nacimiento", "direccion", "telefono", "email", 
  "institucion", "titulo", "fecha_titulo", "empresa", "puesto", "fecha_inicio", "fecha_fin"];
	
  if(localStorage.length > 0){
	  document.getElementById("panel_datos").style.display = "block";
	  document.getElementById("panel_form").style.display = "none";
	  
	  for(i = 0; i < form_array.length; i++){
		  
		const key = form_array[i];
		const value = localStorage.getItem(key);
		
		//Muestro el valor en cada campo del form
		document.getElementById(key).value = value;
		
		//De acuerdo se recorre el array de campos se muestra en encabezado
		if(i == 0){
			const p = document.createElement('p');
			p.innerHTML = `<h3>Datos Personales</h3>`;
			divDatos.appendChild(p);
		}
		if(key == 'institucion'){
			const p = document.createElement('p');
			p.innerHTML = `<h3>Educación</h3>`;
			divDatos.appendChild(p);
		}
		if(key == 'empresa'){
			const p = document.createElement('p');
			p.innerHTML = `<h3>Experiencia Laboral</h3>`;
			divDatos.appendChild(p);
		}
		
		const p = document.createElement('p');
		p.innerHTML = `${key}: ${value}`;		  
		 
		divDatos.appendChild(p);
	  }
	  
  }else{
	  document.getElementById("panel_form").style.display = "block";
	  document.getElementById("panel_datos").style.display = "none";
  }
  
  const p = document.createElement('p');
  if(localStorage.length > 0){
	  p.innerHTML = `<h2>Currículum Vitae</h2>`;
  }else{
	  p.innerHTML = `Currículum sin información...`;
  }
  divDatos.prepend(p);
  
  
}

mostrarDatos();
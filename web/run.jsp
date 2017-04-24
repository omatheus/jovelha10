<!doctype html>

<html lang="en">
<head>

  <meta charset="utf-8">

  <title>JOVELHA 1.0</title>
  <meta name="JOVELHA 1.0" content="Tic-Tac-Toe">
  <meta name="Matheus Henrique Silva" content="mhens.com">

  <meta name="viewport" content="width=device-width, 
  initial-scale=1.0">


  <link rel="stylesheet" href="jocardinalcss/cardinal.css">


	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
	</script>


<style>




body
{
background-color:#1A666B;
}

.box
{
background:#B85008;
color:#FFFFFF;
}

.desabilitar{
    pointer-events: none;
    opacity: 0.2;
}


#josection2
{
display:none;
}

</style>




</head>


<body id="jobody1">
 

<section id="josection1">

<br>
<div id="jodiv1">


	<div id="joalicentro1" class="grid grid-align-center mb">




<div id="joroll1" class="grid gutter-0 mb">

		<div id="JOA1" class="grid-item 1/6"><div id="JA1" class="box tc">?</div></div>
                <div id="JOA2" class="grid-item 1/6"><div id="JA2" class="box tc">?</div></div>
                <div id="JOA3" class="grid-item 1/6"><div id="JA3" class="box tc">?</div></div>






<div id="joroll2" class="grid gutter-0 mb">

		<div id="JOB1" class="grid-item 1/6"><div id="JB1" class="box tc">?</div></div>
                <div id="JOB2" class="grid-item 1/6"><div id="JB2" class="box tc">?</div></div>
                <div id="JOB3" class="grid-item 1/6"><div id="JB3" class="box tc">?</div></div>






<div id="joroll3" class="grid gutter-0 mb">

		<div id="JOC1" class="grid-item 1/6"><div id="JC1" class="box tc">?</div></div>
                <div id="JOC2" class="grid-item 1/6"><div id="JC2" class="box tc">?</div></div>
                <div id="JOC3" class="grid-item 1/6"><div id="JC3" class="box tc">?</div></div>






	</div>

</div>




</section>

<section id="josection2">
<br><br>
	<div id="jofinal">
		<div id="jomsg" 
		class="wrapper wrapper-flush mb"><div id="jocaixa" class="box">!!</div></div>
	</div>

</section>

	<script src="jofunc/joato.js">
	</script>


</body>



</html>

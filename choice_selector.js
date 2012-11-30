var question=["Perangkat yang harus ada dalam pengoperasian komputer adalah ...","Langkah-langkah untuk membuat folder baru dengan menggunakan mouse adalah ...","Suatu perangkat yang berfungsi melakukan proses input (masukan), proses pengolahan data dan output (keluaran) adalah ...","Menampilkan data masukan yang telah diproses oleh CPU adalah ...","Yang bukan termasuk perangkat lunak aplikasi adalah ...","Salah satu komponen komputer yg fungsinya hanya memberikan perintah adalah ...","Diantara komponen komputer yang berfungsi untuk menyimpan data adalah ...","Monitor, printer dan speaker termasuk ...","Yang disebut sebagai user / pengguna / pengguna akhir adalah ...","Dibawah ini yang tidak termasuk sistem operasi adalah ..."];

var setimag=["Soal1.jpg","soal2.jpg","soal3.jpg","soal4.gif","soal5.jpg","Soal6.png","Soal7.jpg","Soal8.jpg","Soal9.png","Soal10.png"];
var choicedata=[["Hardware Software OS","Hardware Software Banner","Hardware Software Windows","Hardware Software Brainware"],["klik kiri >properties >new >folder","klik kanan >folder >properties","klik kiri >new >older","klik kanan >new >folder"],["Hardware","Software","Brainware","Malware"],["Media Penyimpanan","Perangkat Masukan","Perangkat Keluaran","Perangkat Proses"],["Linux","Microsoft Word","Pinball","Nero burning CD"],["Monitor","CPU","Keyboard","Scanner"],["Speaker","Harddisk","Processor","Keyboard"],["Input-Output","Proses","Output","Storage"],["Software","Brainware","Hardware","Prosesor"],["Ms. Windows XP","Linux","Access","Android"]];
var answers=["Hardware Software Brainware","klik kanan >new >folder","Hardware","Perangkat Keluaran","Linux","Keyboard","Harddisk","Input-Output","Brainware","Access"];
var trackindex=0;
var points=0;

function pageSwaper(swapTo)
 {
		 trackindex=swapTo;
	document.getElementById("questionbar").innerHTML="<span class='indexbuttons'>"+swapTo+"</span>"+question[swapTo-1];
	document.getElementById("images").src="images/"+setimag[swapTo-1];
	for(var i=0;i<4;i++)
		{
			document.getElementById("choice"+(i+1)).value=choicedata[swapTo-1][i];
			document.getElementById("opt"+(i+1)).innerHTML=choicedata[swapTo-1][i];
			
		}
	
	
 }


function optionCheck(trackindex)
		{	
			for(var j=1;j<=4;j++)
				{
					if(document.getElementById("choice"+j).checked)
						{

						if(document.getElementById("choice"+j).value==answers[trackindex-1])
							{
									points=points+10;
									document.getElementById("justifybar").innerHTML="Great Choice";
									document.getElementById("justifybar").className="justifybar";
									document.getElementById("scorecard").innerHTML="Score"+": "+points+"Points/100";
									document.getElementById("scorecard").className="scorecard";
									setTimeout("clearOut();",3000);									
									break;
							}
						else {
							document.getElementById("justifybar").innerHTML="Wrong.the right choice is"+" "+answers[trackindex-1];
							document.getElementById("justifybar").className="justifybar";
							setTimeout("clearOut();",3000);

							break;
					  	     }
												
						}
				}
		}

function clearOut()
		{
			document.getElementById('justifybar').innerHTML='';
			document.getElementById('justifybar').className='';
		        			
			
		}
	

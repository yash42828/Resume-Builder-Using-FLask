        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function() {
          'use strict';
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                if (form.checkValidity() !== false) {
                    setdata();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
        })();

        function setdata(){
            document.getElementById('uname').innerText = document.getElementById('name').value;
            document.getElementById('name_declaration').innerText = document.getElementById('name').value;
            document.getElementById('n_declaration').innerText = document.getElementById('name').value;

            
            document.getElementById('udob').innerText = document.getElementById('dob').value;
            document.getElementById('uphnum').innerText = document.getElementById('phnum').value;
            document.getElementById('uemail').innerText = document.getElementById('email').value;
            document.getElementById('ulocation').innerText = document.getElementById('city').value +", "+ document.getElementById('state').value;
            document.getElementById('dec_place').innerText = document.getElementById('city').value +", "+ document.getElementById('state').value;

            document.getElementById('uabout').innerText = document.getElementById('uaboutself').value;
            document.getElementById('ucareerobject').innerText = document.getElementById('ucareerob').value;

            document.getElementById('fathername').innerHTML = "Father's Name  <span style='margin-left:20px'></span>"+ ":" + document.getElementById('fname').value;
            document.getElementById('mothername').innerHTML = "Mother's Name   <span style='margin-left:20px'></span>"+":" + document.getElementById('mname').value;
            document.getElementById('permanentaddress').innerHTML = "Permanent Address    <span style='margin-left:20px'></span>"+":"+ document.getElementById('paddress').value;

            var myTab = document.getElementById('education_data');

            document.getElementById('education_data_table').innerHTML="";
            // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
            for (i = 0; i < myTab.rows.length; i++) {
                // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                  var objCells = myTab.rows.item(i).cells;
                // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
                data = "<tr><td><span style='font-weight: 600;font-size: 20px'>"+
                        objCells.item(0).innerHTML
                        +"</span> <br>"+objCells.item(1).innerHTML+"</td>"+
                        "<td>Graduated, "+objCells.item(2).innerHTML +" "+objCells.item(3).innerHTML+"</td></tr>";
               document.getElementById('education_data_table').innerHTML = document.getElementById('education_data_table').innerHTML + data;
            }

            var myTab = document.getElementById('acheivement_data');

            document.getElementById('achivements_data_li').innerHTML="";
            // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
            for (i = 0; i < myTab.rows.length; i++) {
                // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                  var objCells = myTab.rows.item(i).cells;
                // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
                
                data = "<li style='font-size:18px;margin-bottom: 5px'>"+
                        objCells.item(0).innerHTML + "</li>";
               document.getElementById('achivements_data_li').innerHTML = document.getElementById('achivements_data_li').innerHTML + data;
            }

            var myTab = document.getElementById('skill_data');

            document.getElementById('skills_data_li').innerHTML="";
            // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
            for (i = 0; i < myTab.rows.length; i++) {
                // GET THE CELLS COLLECTION OF THE CURRENT ROW.
                var objCells = myTab.rows.item(i).cells;
                // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
                
                data = "<li style='font-size:18px;margin-bottom: 5px'>"+
                        objCells.item(0).innerHTML + "</li>";
            document.getElementById('skills_data_li').innerHTML = document.getElementById('skills_data_li').innerHTML + data;
            }
            
        }


        function printDiv() 
            {
               $("#head").hide();
               window.print();
               $("#head").show();
            }

        function addcourse(){
            if(document.getElementById('course').value == ""){
                document.getElementById('co_err').style.display="";
            }
            else if(document.getElementById('college').value == ""){
                document.getElementById('col_err').style.display="";
            }
            else if(document.getElementById('month').value == "Please select One.."){
                document.getElementById('select_month_err').style.display="";
            }
            else if(document.getElementById('year').value == "" || (document.getElementById('year').value) < 1990 || (document.getElementById('year').value) > 2019 ){
                document.getElementById('year_err').style.display="";
            }
            else{
                var table = document.getElementById("education_data");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = document.getElementById('course').value;
                cell2.innerHTML = document.getElementById('college').value;
                cell3.innerHTML = document.getElementById('month').value +" "+document.getElementById('year').value;
                cell4.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)'";
                }
        }

        function addache(){
            if(document.getElementById('achivement').value==""){
                document.getElementById('achivement_err').style.display="";
            }
            else{
                var table = document.getElementById("acheivement_data");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = document.getElementById('achivement').value;
                }
        }
        function achivementDeleteFunction() {
            document.getElementById("acheivement_data").deleteRow(0);
        }

        function addskills(){
            if(document.getElementById('skills').value==""){
                document.getElementById('skills_err').style.display="";
            }
            else{
                var table = document.getElementById("skill_data");
                var row = table.insertRow(0);
                var cell1 = row.insertCell(0);
                cell1.innerHTML = document.getElementById('skills').value;
                }
        }
        function skillsDeleteFunction() {
            document.getElementById("skill_data").deleteRow(0);
        }

        function myDeleteFunction() {
            document.getElementById("education_data").deleteRow(0);
        }
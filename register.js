$("document").ready(function(){
				//alert("Jquery Working");
					var min=1000;
					var max=9999;
					var m=max-min+1;
					var otp=Math.floor(Math.random()*m+min);
					alert(otp);

				
				$(".error").hide();
				$("#sname").hide();
				$("#semail").hide();
				$("#smobile").hide();
				$("#edit").hide();
				$("#confirm").hide();
				$("#msg").hide();
				setTimeout(function(){
				$("#msg").toggle("slow");
				},2000);
				$("#save").click(function(){
					//Variable Initialiations
					var name = $("#name").val();
					var email = $("#email").val();
					var mobile = $("#mobile").val();
					// Pattern Variables
					var pattern_name=/^[A-Za-z' ]{1,80}$/i;
					var pattern_email=/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/i;
					if(name=='')
					{
						//alert("Please Enter Name");
						var ename = "Please Enter Name";
						$("#ename").text(ename).fadeIn();
						setTimeout(function(){
							$("#ename").fadeOut();
						},4000);
						$("#name").focus();
						return false;
					}
					else if(!pattern_name.test(name))
					{
						var ename = "Please Enter Valid Name";
						$("#ename").text(ename).fadeIn();
						setTimeout(function(){
							$("#ename").fadeOut();
						},4000);
						$("#name").focus();
						return false;
					}
					if(email=='')
					{
						//alert("Please Enter Name");
						var eemail = "Please Enter Email";
						$("#eemail").text(eemail).fadeIn();
						setTimeout(function(){
							$("#eemail").fadeOut();
						},4000);
						$("#email").focus();
						return false;
					}
					else if(!pattern_email.test(email))
					{
						//alert("Please Enter Name");
						var eemail = "Please Enter Valid Email";
						$("#eemail").text(eemail).fadeIn();
						setTimeout(function(){
							$("#eemail").fadeOut();
						},2000);
						$("#email").focus();
						return false;
					}
					if(mobile=='')
					{
						//alert("Please Enter Name");
						var emobile = "Please Enter Mobile";
						$("#emobile").text(emobile).fadeIn();
						setTimeout(function(){
							$("#emobile").fadeOut();
						},2000);
						$("#mobile").focus();
						return false;
					}
					$("#save").hide();
					$("#edit").show();
					$("#confirm").show();
					$("#name").hide();
					$("#email").hide();
					$("#mobile").hide();
					$("#sname").text(name).show();
					$("#semail").text(email).show();
					$("#smobile").text(mobile).show();
				});
				$("#edit").click(function(){
				$("#sname").hide();
			    $("#semail").hide();
			    $("#smobile").hide();
				$("#name").text(name).show();
				$("#email").text(email).show();
				$("#mobile").text(mobile).show();
				$("#save").show();
				$("#edit").hide();
				$("#confirm").hide();
				
				});
				$("#confirm").click(function(){
				window.location="otp.html";
				});
				
			});
window.onload = function () { 

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");  //����������
    //context.fillRect(10,10,100,100)   //�ڻ����ϻ������ĸ������ֱ���x���꣬y����,���鳤��,������

    //�ڻ����ϻ����ǣ�������beginPath��moveTo����lineTo
    //context.beginPath();
    //context.moveTo(50, 150);    //��ʼ��
    //context.lineTo(100, 150);   //����һ���ߣ�������x�����y����
    //context.lineTo(50, 30);     //���ڶ�����
    //context.closePath();        //�Զ���յ�ǰ��͵�һ����ʼ��
    //context.lineWidth = 5;      //������߿��߿��
 //   context.stroke();         //����߿���
    //context.fillStyle = "red";  //������ɫ
    //context.fill();             //��ͼ
    //  console.log(1)

    //�ڻ����ϻ�Բ����Ҫ��arc����
    //context.beginPath();
    //context.arc(300, 150, 100, 0,degreeToRadians(180), true)       //��Բ�������ֱ���Բ��x���꣬Բ��y���꣬�뾶���ȣ���ʼ���ȣ��������ȣ�����true��ʱ��,false˳ʱ�룩
    //context.fillStyle = "red";
    //context.fill(); //���Բ
    //context.stoke() //�������

    ////�ڻ�����д��
    //context.fillStyle = "white";    //��������ɫ
    //context.font = "20px bold lem sans-serif"; //����������ʽ
    //context.textAlign = "left";                //���ö���
    //context.fillText("I saw this tweet", 20, 40); //д�֣���һ�����������ݣ��ڶ�������������x���꣬����������������y����
    ////context.strokeText("text",20,40,200)//������fillдʵ����Ҳ������stokeд�����֣����һ�������ǿ�ѡ��maxwidth������ı���ȴ���maxwidth�����Զ��ı�����


    ////�ڻ�������ʾһ��ͼƬ

    //var img = new Image();
    //img.src = "img.png";                        //ָ��һ��ͼƬ
    //context.drawImage(img, 20, 120, 70, 70);    //����ͼƬ����һ��������ͼƬ���󣬵ڶ�����ͼƬx���꣬��������ͼƬy���꣬���ĸ�������ͼƬ��ȣ������������ͼƬ�߶�


    //��һ��Ц��
    context.beginPath();
    context.arc(300, 300, 200, 0, degreeToRadians(360), true);
    context.fillStyle = "#ffffcc";
    context.fill();
    context.stroke();


    context.beginPath();
    context.arc(200, 250, 25, 0, degreeToRadians(360), true);
    context.stroke();

    context.beginPath();
    context.arc(400, 250, 25, 0, degreeToRadians(360), true);
    context.stroke();

    context.beginPath();
    context.moveTo(300, 300);
    context.lineTo(300, 350);
    context.stroke();


    context.beginPath();
    context.arc(300, 350, 75, degreeToRadians(20), degreeToRadians(160), false);
    context.stroke();

}


//�Ƕ�ת���Ⱥ���
function degreeToRadians(degree) {
    return (degree * Math.PI) / 180;
}
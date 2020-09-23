void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
}
 
void loop() {
  // put your main code here, to run repeatedly:
 int sensorValue=analogRead(A0);
 Serial.print("AA08,AA16,PresentR(0~5.0):");
 float resistance=sensorValue*(5.0/1023.0);
 Serial.println(resistance);
 delay(500);
}

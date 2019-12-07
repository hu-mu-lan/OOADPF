package Canvas;

public interface line extends component{
	String type = "";	
	phenomenon Phenomenon = null;
	shape origin = null;
	shape terminal = null;
	
	public void editInfo(shape origin,shape terminal,String a){}
	public void displayAddPhonomenon(String a){}
	public void displayMinusPhonomenon(String a){}
	
}

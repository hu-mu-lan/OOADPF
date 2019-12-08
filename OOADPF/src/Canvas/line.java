package Canvas;

public interface line extends component{
	String type = "";	
	phenomenon Phenomenon = null;
	shape origin = null;
	shape terminal = null;
	
	public default void editInfo(shape origin,shape terminal,String a){}
	public default void displayAddPhonomenon(String a){}
	public default void displayMinusPhonomenon(String a){}
	
}

package Canvas;

import java.util.ArrayList;

public interface phenomenon {
	ArrayList<String> pList= null;
	public default void addPhonomenon(String a){}
	public default void minusPhonomenon(String a){}
	public default ArrayList<String> getPlist(){return pList;}
	public boolean isempty();
}

package Canvas;

import java.util.ArrayList;

public class interactionPhenomenon implements phenomenon{
	ArrayList<String> pList= null;
	
	public interactionPhenomenon(){
		pList= new ArrayList<String>();
	}
	
	public void addPhonomenon(String a){
		pList.add(a);
	}
	
	public void minusPhonomenon(String a){
		int i =pList.indexOf(a);
		pList.remove(i);
	}
	
	public ArrayList<String> getPlist(){
		return pList;
	}
}

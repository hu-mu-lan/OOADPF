package Canvas;

import Canvas.*;

public class interFace implements line{
	String type = "";	
	phenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	/*public interFace() {
		this.Phenomenen=new InteractionPhenomenon();
	}*/
	
	public interFace(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenen=new InteractionPhenomenon();
		System.out.println("ooo");
	}
	
	public void editInfo(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
	}
	
	public void displayAddPhonomenon(String a){
		Phonomenon.addPhonomenon(a);
	}
	
	public void displayMinusPhonomenon(String a){
		Phonomenon.minusPhonomenon(a);
	}

}

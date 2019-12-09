package Canvas;

public class interFace extends line{
	String type = "";	
	interactionPhenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	public String getType() {
		return this.type;
	}
	
	public shape getOrigin() {
		return this.origin;
	}
	
	public shape getTerminal() {
		return this.terminal;
	}
	
	public interFace(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenon=new interactionPhenomenon();
	}
	
	public void editInfo(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
	}
	
	public void displayAddPhonomenon(String a){
		Phenomenon.addPhonomenon(a);
	}
	
	public void displayMinusPhonomenon(String a){
		Phenomenon.minusPhonomenon(a);
	}
}

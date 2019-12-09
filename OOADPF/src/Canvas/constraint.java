package Canvas;

public class constraint extends line{
	String type = "";	
	conInteractionPhenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	public constraint(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenon = new conInteractionPhenomenon(false);
	}
	
	public String getType() {
		return this.type;
	}
	
	public shape getOrigin() {
		return this.origin;
	}
	
	public shape getTerminal() {
		return this.terminal;
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
	
	public void displayChangeIsConstrint(boolean isConstraint){
		Phenomenon.changeConstraint(isConstraint);
	}

}
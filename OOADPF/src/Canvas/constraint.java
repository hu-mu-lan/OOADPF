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
		canvas.addLine(this);
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
		canvas.minusLine(this);
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		canvas.addLine(this);
	}
	
	public void displayAddPhonomenon(String a){
		canvas.minusLine(this);
		Phenomenon.addPhonomenon(a);
		canvas.addLine(this);
	}
	
	public void displayMinusPhonomenon(String a){
		canvas.minusLine(this);
		Phenomenon.minusPhonomenon(a);
		canvas.addLine(this);
	}
	
	public void displayChangeIsConstrint(boolean isConstraint){
		canvas.minusLine(this);
		Phenomenon.changeConstraint(isConstraint);
		canvas.addLine(this);
	}

}
package Canvas;

public class reference implements line{
	String type = "";	
	conInteractionPhenomenon Phenomenon = null;
	
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
	
	public reference(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenon=new conInteractionPhenomenon(false);
		canvas.addComponent(this);
	}
	
	public void editInfo(shape origin,shape terminal,String type){
		canvas.minusComponent(this);
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		canvas.addComponent(this);
	}
	
	public void displayAddPhonomenon(String a){
		canvas.minusComponent(this);
		Phenomenon.addPhonomenon(a);
		canvas.addComponent(this);
	}
	
	public void displayMinusPhonomenon(String a){
		canvas.minusComponent(this);
		Phenomenon.minusPhonomenon(a);
		canvas.addComponent(this);
	}
	
	public void displayChangeIsConstrint(boolean isConstraint){
		canvas.minusComponent(this);
		Phenomenon.changeConstraint(isConstraint);
		canvas.addComponent(this);
	}
}

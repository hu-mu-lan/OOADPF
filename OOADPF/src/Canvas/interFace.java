package Canvas;

public class interFace extends line{
	String type = "";	
	phenomenon Phenomenon = null;
	
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
		canvas.addLine(this);
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
}

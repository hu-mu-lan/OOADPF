package Canvas;

public class constraint implements line{
	tring type = "";	
	phenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	public constraint(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenen=new conInteractionPhenomenon();
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
	
	public void displayChangeIsConstrint(isConstraint){
		Phonomenon.changeConstraint(isConstraint);
	}

}
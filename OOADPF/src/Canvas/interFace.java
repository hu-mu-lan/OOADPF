package Canvas;

public class interFace implements line{
	tring type = "";	
	phenomenon Phenomenon = null;
	
	shape origin = null;
	shape terminal = null;
	
	public interFace(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
		this.Phenomenen=new InteractionPhenomenon();
	}
	
	public editoInfo(shape origin,shape terminal,String type){
		this.type=type;
		this.origin=origin;
		this.terminal=terminal;
	}
	
	public displayAddPhonomenon(String a){
		Phonomenon.addPhonomenon(a);
	}
	
	public displayMinusPhonomenon(String a){
		Phonomenon.minusPhonomenon(a);
	}

}

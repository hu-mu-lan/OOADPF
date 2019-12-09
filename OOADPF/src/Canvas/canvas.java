package Canvas;

import Canvas.shape;
import Canvas.line;

import java.util.ArrayList;
public class canvas {
	static ArrayList <shape> slist;
	static ArrayList <line> llist;

	public canvas() {
		slist = new ArrayList<shape>();
		llist = new ArrayList<line>();
	}
	
    public void check () {
    }
    public void output() {
    }
    
    public void addShape (shape a){
        slist.add(a);
    }
    public void minusShape (shape a){
        int i = slist.indexOf(a);
        slist.remove(i);
    }

    public void addLine (line a){
        llist.add(a);
    }
    public void minusLine (line a){
        int i = llist.indexOf(a);
        llist.remove(i);
    }
    
    public ArrayList <shape> getSlist(){
    	return slist;
    }
    public ArrayList <line> getLlist(){
    	return llist;
    }
}



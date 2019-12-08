package Canvas;

public class machine extends shape {
	public double top;
    public double left;
    public String Shortname,Description;

    public machine(double top, double left,String shortname,String description) {
        this.top = top;
        this.left = left;
        this.Shortname =shortname ;
        this.Description=description;
        canvas.addShape(this);
    }
    
    public void changePos(double top, double left) {
    	canvas.minusShape(this);
        this.top = top;
        this.left = left;
    	canvas.addShape(this);
    }
    
    public void editInfo(String shortname,String description){
		canvas.minusShape(this);
		this.Shortname =shortname ;
        this.Description=description;
		canvas.addShape(this);
	}
    
    public String getDescription() {
    	return this.Description;
    }
    public double getTop() {
        return this.top;
    }
    public double getLeft() {
        return this.left;
    }
    public String getShortname() {
        return this.Shortname;
    }


}

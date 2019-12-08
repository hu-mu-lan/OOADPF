package Canvas;

public class machine extends shape {
   public double width;
    public double height;
    public String Shortname,Description;

    public machine(double w, double h,String shortname,String description) {
        this.width = w;
        this.height = h;
        this.Shortname =shortname ;
        this.Description=description;
        canvas.addShape(this);
    }
    
    public void changePos(double width,double height) {
    	canvas.minusShape(this);
    	this.width=width;
    	this.height=height;
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
    public double getWidth() {
        return this.width;
    }
    public double getHeight() {
        return this.height;
    }
    public String getShortname() {
        return this.Shortname;
    }


}

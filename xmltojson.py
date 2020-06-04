# python3
# https://www.geeksforgeeks.org/python-xml-to-json/
# https://www.tutorialspoint.com/python/python_command_line_arguments.htm

# Program to convert an xml 
# file to json file 
  
# import json module and xmltodict 
# module provided by python 
import json 
import xmltodict 
import sys, getopt

def main(argv):
    inputfile = ''
    outputfile = ''
    try:
        opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
    except getopt.GetoptError:
        print('xmltojson.py -i <inputfile> -o <outputfile>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('xmltojson.py -i <inputfile> -o <outputfile>')
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg

    print('Input file is: ', inputfile)
    print('Output file is: ', outputfile)

    # open the input xml file and read 
    # data in form of python dictionary  
    # using xmltodict module 
    with open(inputfile) as xml_file: 
        
        data_dict = xmltodict.parse(xml_file.read()) 
        xml_file.close() 
        
        # generate the object using json.dumps()  
        # corresponding to json data 
        
        json_data = json.dumps(data_dict) 
        
        # Write the json data to output  
        # json file 
        with open(outputfile, "w") as json_file: 
            json_file.write(json_data) 
            json_file.close()

if __name__ == "__main__":
    main(sys.argv[1:])
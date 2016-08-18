__author__ = 'bharadwaj'

import os as osutils


class FileUtilsImpl:
    def __init__(self,name,type,path,operation):
        self.path = path
        self.type = type
        self.name = name
        self.operation = operation
    
    def createFile(self,isRender,template,data):
        fileObject = open(self.path+'/'+self.name,"a+")
        if isRender:
            dataAfterRender = renderTemplate(dataMap,template)
        else:
            fileObject.write(data)
        fileObject.close()
        return
    
    def deleteFile(self,path):
        osutils.remove(path)
        return

    def deleteFolder(self,path):
        """ Shutil, Removes a folder and all of its contents, including directories. 
            Fails for readonly files."""
        shutil.rmtree(path)
        return

    def createFolder(self,path):
        """ Create a Directory if it does not exist. Suports recursive create. """
        if not osutils.path.exists(path):
            osutils.makedirs(path)
        return
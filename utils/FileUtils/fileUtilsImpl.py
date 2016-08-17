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
        return
    def createFolder(self,path):
        return
